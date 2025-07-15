import { headers as getHeaders } from 'next/headers.js'
import Link from 'next/link'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

return (
    <div className="home-wrapper page-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">PropertyList</div>
        <div className="nav-links">
          <Link href="/admin/login"><button className="btn">Login</button></Link>
          <Link href="/admin/create-first-user"><button className="btn">Signup</button></Link>
          <Link href="/browseproperties"><button className="btn btn-primary">Browse Properties</button></Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>
          Post your properties on <span className="highlight">PropertyList</span>
        </h1>
        <p>A fast and secure platform to list your real estate — fully powered by PayloadCMS.</p>
        <div className="hero-buttons">
          <Link href="/admin"><button className="btn btn-success">Go to Payload Login Page</button></Link>
          <Link href="/browseproperties"><button className="btn">Browse Properties</button></Link>
        </div>
      </section>


    </div>
  );
}