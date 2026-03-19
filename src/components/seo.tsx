const TITLE = "Swatch .beats – Internet Time Clock"
const DESCRIPTION =
  "A live Swatch Internet Time clock. The day is divided into 1000 .beats — no time zones, one universal time for the entire internet."
const URL = "https://beats.jacob-jordan.me"

export function Seo() {
  return (
    <>
      <meta name="description" content={DESCRIPTION} />
      <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
      <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:url" content={URL} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
    </>
  )
}
