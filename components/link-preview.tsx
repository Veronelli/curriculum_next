"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"

interface MicrolinkData {
  title?: string
  description?: string
  image?: { url?: string }
  logo?: { url?: string }
  url?: string
}

interface LinkPreviewProps {
  url: string
  compact?: boolean
  className?: string
}

export function LinkPreview({ url, compact = false, className = "" }: LinkPreviewProps) {
  const [data, setData] = useState<MicrolinkData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(false)
    setData(null)

    fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}`)
      .then((res) => res.json())
      .then((json: { data?: MicrolinkData }) => {
        if (cancelled) return
        if (json.data) setData(json.data)
        setLoading(false)
      })
      .catch(() => {
        if (!cancelled) {
          setError(true)
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [url])

  const domain = new URL(url).hostname.replace(/^www\./, "")
  const href = data?.url || url

  if (loading) {
    return (
      <div
        className={`animate-pulse rounded border border-dotted ${compact ? "px-3 py-2" : "p-3"} ${className}`}
        style={{ borderColor: "var(--color-neon-dim)" }}
      >
        <div className="h-3 w-20 rounded bg-white/10" />
        <div className="mt-2 h-4 w-40 rounded bg-white/10" />
      </div>
    )
  }

  if (error || !data) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`underline decoration-dotted underline-offset-4 transition-opacity hover:opacity-70 ${className}`}
        style={{ color: "var(--color-neon)" }}
      >
        {domain}
      </a>
    )
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`group block overflow-hidden rounded border border-dotted transition-all hover:bg-white/5 ${className}`}
      style={{ borderColor: "var(--color-neon-dim)" }}
    >
      {!compact && data.image?.url && (
        <div className="aspect-[2/1] overflow-hidden bg-white/5">
          <img
            src={data.image.url}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none"
            }}
          />
        </div>
      )}
      <div className={compact ? "px-3 py-2" : "p-3"}>
        <p className="text-xs uppercase tracking-widest" style={{ color: "var(--color-neon)" }}>
          {domain}
        </p>
        <p className="mt-0.5 text-sm font-semibold text-white line-clamp-2">
          {data.title || domain}
        </p>
        {!compact && data.description && (
          <p className="mt-1 text-xs text-muted line-clamp-2">
            {data.description}
          </p>
        )}
      </div>
    </motion.a>
  )
}
