'use client'

import { useState, FormEvent } from "react"

interface NewsletterProps {
  title?: string
  description?: string
  placeholder?: string
  buttonText?: string
}

export function NewsletterSignup({
  title = "Stay Updated",
  description = "Get the latest publishing insights, trends, and stories delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
}: NewsletterProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus("loading")

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error("Subscription failed")
      setStatus("success")
      setMessage("Thanks for subscribing! We'll be in touch.")
      setEmail("")
    } catch {
      setStatus("error")
      setMessage("Something went wrong. Please try again or email us directly at info@globalvillagepublishers.co.ke")
    }
  }

  return (
    <div style={{
      marginTop: "3rem",
      padding: "2.5rem",
      background: "#f8f6f2",
      borderRadius: "12px",
      textAlign: "center",
      maxWidth: "600px",
      marginLeft: "auto",
      marginRight: "auto",
    }}>
      <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#414142", margin: "0 0 0.5rem" }}>
        {title}
      </h3>
      <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: "1.6", margin: "0 0 1.5rem" }}>
        {description}
      </p>

      {status === "success" ? (
        <p style={{ marginTop: "1rem", fontSize: "0.9rem", fontWeight: 500, color: "#2C6E49" }}>{message}</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            style={{
              flex: "1",
              minWidth: "220px",
              padding: "0.75rem 1rem",
              borderRadius: "8px",
              border: "1px solid #ddd",
              fontSize: "1rem",
              outline: "none",
              color: "#414142",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#EC5C23")}
            onBlur={(e) => (e.target.style.borderColor = "#ddd")}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              padding: "0.75rem 1.5rem",
              background: "#EC5C23",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {status === "loading" ? "Sending..." : buttonText}
          </button>
        </form>
      )}

      {status === "error" && (
        <p style={{ marginTop: "1rem", fontSize: "0.9rem", fontWeight: 500, color: "#d32f2f" }}>{message}</p>
      )}
    </div>
  )
}
