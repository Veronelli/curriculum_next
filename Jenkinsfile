pipeline {
agent any

environment {
    DEPLOY_BRANCH = 'deploy'
    SOURCE_BRANCH = 'main'
    NODE_VERSION = '24.5.0'
}

stages {
    stage('Checkout') {
        steps {
            checkout scm
        }
    }

    stage('Setup Node.js') {
        steps {
            script {
                sh "curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION} | bash -"
                sh 'apt-get update'
                sh 'apt-get install -y nodejs npm'
                sh 'node -v'
                sh 'npm -v'
            }
        }
    }

    stage('Install dependencies') {
        steps {
            sh 'npm ci'
        }
    }

    stage('Build') {
        steps {
            sh 'npm run build'
        }
    }

    stage('Verify Export') {
        steps {
            sh '''
                echo "Workspace:"
                pwd

                echo "Root files:"
                ls -la

                if [ ! -d "out" ]; then
                    echo "ERROR: Next.js export folder 'out' was not generated."
                    echo "Did you configure output: 'export' in next.config.ts?"
                    exit 1
                fi

                echo "Export directory:"
                ls -la out
            '''
        }
    }

stage('Deploy to branch') {
    steps {
        sshagent(credentials: ['79ead8d6-5028-4529-9e33-9d5055b67e8f']) {
            sh '''
                set -e

                git config user.email "jenkins@fhome"
                git config user.name "Jenkins CI"

                DEPLOY_DIR=$(mktemp -d)

                cp -R out/. "$DEPLOY_DIR"

                git fetch origin ${DEPLOY_BRANCH} || true

                if git show-ref --verify --quiet refs/remotes/origin/${DEPLOY_BRANCH}; then
                    git checkout -B ${DEPLOY_BRANCH} origin/${DEPLOY_BRANCH}
                else
                    git checkout --orphan ${DEPLOY_BRANCH}
                fi

                find . \
                    -mindepth 1 \
                    -maxdepth 1 \
                    ! -name '.git' \
                    -exec rm -rf {} +

                cp -R "$DEPLOY_DIR"/. .

                git add .

                if git diff --cached --quiet; then
                    echo "No changes to deploy"
                else
                    git commit -m "Deploy $(date '+%Y-%m-%d %H:%M:%S')"

                    if git show-ref --verify --quiet refs/remotes/origin/${DEPLOY_BRANCH}; then
                        git push origin ${DEPLOY_BRANCH}
                    else
                        git push -u origin ${DEPLOY_BRANCH}
                    fi
                fi

                git checkout ${SOURCE_BRANCH}

                rm -rf "$DEPLOY_DIR"
            '''
        }
    }
}
}

post {
    success {
        echo 'Pipeline completed successfully'
    }

    failure {
        echo 'Pipeline failed'
    }

    always {
        cleanWs()
    }
}

}
