import React, { useState } from 'react'
import '../assets/css/school-filter.css'

const NewsFilter = ({ onCategoryChange, categories, className = '' }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0].value);

  const handleTabClick = (category) => {
    setActiveCategory(category);
    if (onCategoryChange) onCategoryChange(category);
  };

  const getTabClassName = (category, index) => {
    let baseClass = 'school-filter-tab';
    if (activeCategory === category.value) {
      baseClass += ' active';
    }
    
    // Simple odd/even based on position
    baseClass += index % 2 === 0 ? ' even' : ' odd';
    
    return baseClass;
  };

  return (
    <div className={`school-filter segmented ${className}`}>
      {categories.map((category, index) => (
        <button
          key={category.value}
          onClick={() => handleTabClick(category.value)}
          className={getTabClassName(category, index)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default NewsFilter 