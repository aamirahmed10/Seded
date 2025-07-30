import React, { useState } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const schools = [
  {
    name: "Le Bocage International School",
    type: "Secondaire",
    position: { lat: -20.2235, lng: 57.4989 }
  },
  {
    name: "Mauritius Primary Academy",
    type: "Primaire",
    position: { lat: -20.1665, lng: 57.5043 }
  },
  {
    name: "SEN Learning Center",
    type: "SEN",
    position: { lat: -20.1705, lng: 57.5100 }
  },
  {
    name: "Technical Training School",
    type: "Technique",
    position: { lat: -20.1832, lng: 57.4910 }
  }
];

const categories = ["Tous", "Primaire", "Secondaire", "SEN", "Technique"];

export default function MauritiusSchoolsMap() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredSchools =
    selectedCategory === "Tous"
      ? schools
      : schools.filter((school) => school.type === selectedCategory);

  const center = { lat: -20.1700, lng: 57.5040 }; 

  return (
    <APIProvider apiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <div className='map-container'>

        <div className='map-filters mb-3'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 16px',
                borderRadius:'20px',
                background: selectedCategory === cat ? '#fff' : '#cceeff',
                border: '1px solid #aaa',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: selectedCategory === cat ? '600' : '400',
                
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Google Map */}
        <Map
          center={center}
          zoom={11}
          style={{
            height: '100%',
            width: '100%',
            borderRadius: '20px',
            flex: 1,
            minHeight: '500px'
          }}
        >
          {filteredSchools.map((school, i) => (
            <Marker key={i} position={school.position} title={school.name} />
          ))}
        </Map>
      </div>
    </APIProvider>
  );
}
