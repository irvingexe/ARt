import React from 'react'
import Qr from './components/Qr'
import Script from 'next/script'

export default function page() {
  return (
    <>
      <Script src="https://launchar.app/sdk/v1?key=XkiKqjr09vKqXQGgNE0VnQBhodJWlhD6&redirect=true" strategy='beforeInteractive'></Script>
      <div><Qr/></div>
    </>
  )
}
