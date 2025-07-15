'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import './browse.css';

interface Property {
  id: string;
  title?: string;
  description?: string;
  phoneNumber?: string;
  image?: {
    url?: string;
  };
}

export default function BrowseProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/add-property', {
          cache: 'no-store',
        });
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const data = await res.json();
        setProperties(data?.docs || []);
      } catch (err: any) {
        console.error('Fetch Error:', err);
        setError('Failed to load properties.');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="browse-container">
      <h1 className="browse-title">Browse Properties</h1>

      {loading && <p>Loading properties...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="property-grid">
        {properties.length === 0 && !loading && (
          <p className="no-properties">No property is posted.</p>
        )}

        {properties.map((property) => (
          <div key={property.id} className="property-card">
            {property.image?.url && (
              <img
                src={property.image.url}
                alt={property.title || 'Property Image'}
                className="property-img"
              />
            )}
            <h2>{property.title || 'No Title'}</h2>
            <p>{property.description || 'No Description Available'}</p>
            <p><strong>Phone:</strong> {property.phoneNumber || 'Not Provided'}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}
