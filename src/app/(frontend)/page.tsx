'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Property from '../(frontend)/properties/page'; // adjust path if needed
import './styles.css';

interface Property {
  id: string;
  title?: string;
  description?: string;
  city?: string;
  area?: string;
  type?: string;
  price?: number;
  size?: string;
  bedrooms?: number;
  bathrooms?: number;
  image?: {
    url?: string;
  };
  phoneNumber?: string;
}

export default function HomePage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const res = await fetch('/api/property', { cache: 'no-store' });
        const data = await res.json();
        setProperties(data?.docs || []);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProperties();
  }, []);

  return (
    <div className="home-wrapper page-wrapper">
      <nav className="navbar">
        <div className="logo">PROPERTY LIST PK</div>
        <div className="nav-links">
          <Link href="/admin/login"><button className="btn bg-gray-900">Login</button></Link>
          <Link href="/admin/create-first-user"><button className="btn bg-gray-900">Signup</button></Link>
        </div>
      </nav>
      <section className="hero">
        <h1>
          Post your properties on <span className="highlight">PropertyList</span>
        </h1>
        <p>
          List your property quickly, securely, and easily.
          Find serious buyers faster than ever.</p>
        <div className="hero-buttons">
          <Link href="/admin"><button className="btn btn-grey-900">Post Properties</button></Link>
        </div>
      </section>
      <section>
        <h2 className='ml-5'>All Properties</h2>
        {loading ? <p>Loading properties...</p> : <Property properties={properties} />}
      </section>
    </div>
  );
}
