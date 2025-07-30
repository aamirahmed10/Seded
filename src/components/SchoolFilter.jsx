import React, { useState } from 'react'

const SchoolFilter = ({ onZoneChange, zones, className = '' }) => {
  const [activeZone, setActiveZone] = useState(zones[0].value);

  const handleTabClick = (zone) => {
    setActiveZone(zone);
    if (onZoneChange) onZoneChange(zone);
  };

  const getTabClassName = (zone, index) => {
    let baseClass = 'school-filter-tab';
    if (activeZone === zone.value) {
      baseClass += ' active';
    }
    
    baseClass += index % 2 === 0 ? ' even' : ' odd';
    
    return baseClass;
  };

  return (
    <div className={`school-filter ${className}`}>
      {zones.map((zone, index) => (
        <button
          key={zone.value}
          onClick={() => handleTabClick(zone.value)}
          className={getTabClassName(zone, index)}
        >
          {zone.label}
        </button>
      ))}
    </div>
  );
};

export default SchoolFilter