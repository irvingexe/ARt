import Script from "next/script"
import './globals.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
        <Script src="https://launchar.app/sdk/v1?key=XkiKqjr09vKqXQGgNE0VnQBhodJWlhD6&redirect=true" strategy='beforeInteractive'></Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
