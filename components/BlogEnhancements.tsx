'use client'

// ─── Blog Enhancements ─────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

// ─── Types ─────────────────────────────────────────────────────────────────

interface Author {
  name: string
  role: string
  bio: string
  image?: string
}

// ─── Author Bio ───────────────────────────────────────────────────────

const DEFAULT_AUTHOR: Author = {
  name: "Matata",
  role: "Publisher & Content Strategist",
  bio: "Matata is a marketer, designer and writer with over 6 years experience in the marketing industry. He is enthusiastic about connecting businesses to customers through compelling brand narratives that cut through the noise. Matata believes the best marketing doesn't feel like marketing at all; it feels like a story worth sharing.",
}

interface AuthorBioProps {
  author?: Author
}

export function AuthorBio({ author = DEFAULT_AUTHOR }: AuthorBioProps) {
  const initials = author.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <div style={{
      marginTop: "3rem",
      padding: "2rem",
      background: "#f8f6f2",
      borderRadius: "12px",
      display: "flex",
      gap: "1.5rem",
      alignItems: "flex-start",
      flexWrap: "wrap" as const,
    }}>
      <div style={{
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: "#EC5C23",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: "1.2rem",
        flexShrink: 0,
      }}>
        {initials}
      </div>
      <div style={{ flex: 1, minWidth: "200px" }}>
        <div style={{
          fontWeight: 700,
          fontSize: "1rem",
          marginBottom: "0.25rem",
        }}>
          Written by {author.name}
        </div>
        <div style={{
          fontSize: "0.875rem",
          color: "#666",
          marginBottom: "0.5rem",
        }}>
          {author.role}
        </div>
        <p style={{
          fontSize: "0.9rem",
          lineHeight: 1.6,
          color: "#333",
          margin: 0,
        }}>
          {author.bio}
        </p>
      </div>
    </div>
  )
}

// ─── Related Posts ────────────────────────────────────────────────────

interface RelatedPost {
  title: string
  slug: string
  excerpt: string
}

interface RelatedPostsProps {
  posts: RelatedPost[]
  currentSlug?: string
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null

  return (
    <div style={{
      marginTop: "3rem",
      paddingTop: "2rem",
      borderTop: "1px solid #e0ddd5",
    }}>
      <h3 style={{
        fontSize: "1.1rem",
        marginBottom: "1rem",
        color: "#414142",
      }}>Related Articles</h3>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "1rem",
      }}>
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              padding: "1rem",
              background: "#f8f6f2",
              borderRadius: "8px",
              textDecoration: "none",
              color: "inherit",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#efece4")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#f8f6f2")}
          >
            <div style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.25rem" }}>
              {post.title}
            </div>
            <div style={{ fontSize: "0.8rem", color: "#666" }}>
              {post.excerpt}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

// ─── Share Buttons ─────────────────────────────────────────────────────

interface ShareButtonsProps {
  title: string
  url?: string
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "")

  const shareLinks = [
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(title + " " + shareUrl)}`,
      color: "#25D366",
    },
    {
      name: "Twitter",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
      color: "#1DA1F2",
    },
    {
      name: "LinkedIn",
      href: `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "#0A66C2",
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "#1877F2",
    },
  ]

  return (
    <div style={{
      marginTop: "2rem",
      padding: "1.5rem 0",
      borderTop: "1px solid #e0ddd5",
    }}>
      <div style={{
        fontSize: "0.9rem",
        fontWeight: 600,
        marginBottom: "0.75rem",
        color: "#414142",
      }}>Share this article</div>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" as const }}>
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              background: link.color,
              color: "white",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 500,
            }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  )
}

// ─── Newsletter Signup (injected via api/subscribe route) ──────────────

interface NewsletterSignupProps {
  subtitle?: string
}

export function NewsletterSignup({
  subtitle = "Get publishing tips, industry insights, and book recommendations delivered to your inbox.",
}: NewsletterSignupProps) {
  return (
    <div style={{
      marginTop: "3rem",
      marginBottom: "1rem",
      padding: "2rem",
      background: "#414142",
      borderRadius: "12px",
      color: "white",
      textAlign: "center" as const,
    }}>
      <h3 style={{
        fontSize: "1.2rem",
        margin: "0 0 0.5rem 0",
        color: "white",
      }}>
        Stay Updated
      </h3>
      <p style={{
        fontSize: "0.9rem",
        margin: "0 0 1.25rem 0",
        opacity: 0.85,
        lineHeight: 1.5,
      }}>
        {subtitle}
      </p>
      <form
        action="/api/subscribe"
        method="POST"
        style={{
          display: "flex",
          gap: "0.5rem",
          maxWidth: "400px",
          margin: "0 auto",
          flexWrap: "wrap" as const,
          justifyContent: "center",
        }}
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          required
          style={{
            flex: 1,
            minWidth: "220px",
            padding: "0.75rem 1rem",
            borderRadius: "6px",
            border: "none",
            fontSize: "0.9rem",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "6px",
            border: "none",
            background: "#EC5C23",
            color: "white",
            fontWeight: 600,
            fontSize: "0.9rem",
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}
