'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import PropertyList from './properties/page';
import './styles.css';

export default function HomePage() {
  const [properties, setProperties] = useState([]);

  const fetchFiltered = async (query = '/api/property') => {
    const res = await fetch(query, { cache: 'no-store' });
    const data = await res.json();
    setProperties(data?.docs || []);
  };

  useEffect(() => {
    fetchFiltered();
  }, []);

  return (
    <div className="home-wrapper page-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">PropertyList</div>
        <div className="nav-links">
          <Link href="/admin/login"><button className="btn">Login</button></Link>
          <Link href="/admin/create-first-user"><button className="btn">Signup</button></Link>
          <Link href="/properties"><button className="btn btn-primary">Browse Properties</button></Link>
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
          <Link href="/properties"><button className="btn">Browse Properties</button></Link>
        </div>
      </section>

      {/* 🔍 Filter */}
      <section>


      </section>

      {/* 🏠 Property List */}
      <section>
        <PropertyList properties={properties} />
      </section>
    </div>
  );
}
