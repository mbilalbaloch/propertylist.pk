import './page.css';

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

export default function Property({ properties = [] }: { properties?: Property[] }) {
  if (!properties.length) {
    return <p>No properties available.</p>;
  }

  return (
    <div className="property-grid">
      {properties.map((property) => (
        <div key={property.id} className="property-card">
          {property.image?.url && (
            <img
              src={property.image.url}
              alt={property.title || 'Property Image'}
              className="property-img"
            />
          )}
          <h2 className="property-title">{property.title || 'No Title'}</h2>
          <p className="property-description">
            {property.description || 'No Description Available'}
          </p>
          <div className="property-info">
            <p><strong>City:</strong> {property.city}</p>
            <p><strong>Area:</strong> {property.area}</p>
            <p><strong>Type:</strong> {property.type}</p>
            <p><strong>Size:</strong> {property.size}</p>
            <p><strong>Price:</strong> PKR {property.price?.toLocaleString()}</p>
            <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
            <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
            <p><strong>Phone:</strong> {property.phoneNumber}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
