pipeline {
    agent any

    environment {
        DEPLOY_BRANCH = 'deploy'
        SOURCE_BRANCH = 'main'
        
        NODE_VERSION = '24.x'
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
                    def nodeVersion = "${NODE_VERSION}"
                    sh "curl -sL https://deb.nodesource.com/setup_${nodeVersion} | sudo bash -"
                    sh 'apt-get install -y nodejs'
                    sh 'node -v'
                }
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build & Export') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to branch') {
            steps {
                script {
                    def workspace = pwd()
                    def outDir = "${workspace}/out"

                    sh '''
                        git config user.email "jenkins@fhome"
                        git config user.name "Jenkins CI"

                        git fetch origin ${DEPLOY_BRANCH} || true

                        if git rev-parse --verify origin/${DEPLOY_BRANCH} > /dev/null 2>&1; then
                            git checkout ${DEPLOY_BRANCH}
                        else
                            git checkout --orphan ${DEPLOY_BRANCH}
                        fi

                        git rm -rf . || true

                        cp -r ${outDir}/* .
                        cp -r ${outDir}/.* . || true

                        git add .

                        if git diff --cached --quiet; then
                            echo "No changes to deploy"
                        else
                            git commit -m "Deploy $(date '+%Y-%m-%d %H:%M:%S')"
                            git push origin ${DEPLOY_BRANCH}
                        fi

                        git checkout ${SOURCE_BRANCH}
                    '''
                }
            }
        }
    }

    post {
        failure {
            echo 'Pipeline failed'
        }
        success {
            echo 'Pipeline completed successfully'
        }
    }
}
