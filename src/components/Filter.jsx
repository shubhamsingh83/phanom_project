import React, { useState } from 'react';
import './Filter.css';

function Filter({setShowFilter,showFilter}) {
 
  const [recommendVisible, setRecommendVisible] = useState(false);

  const toggleFilterVisibility = () => {
    setShowFilter(!showFilter);
  };


  const toggleRecommendVisibility = () => {
    setRecommendVisible(!recommendVisible);
  };

  return (
    <div className="filter">
      <div className="filter-content">
        <div className="filter-left">
          <div className="filter-item">3425 Items</div>
          <div className="filter-item clickable" onClick={toggleFilterVisibility}>
            {showFilter ? "< Hide Filter" : " > Show Filter"}
          </div>
        </div>
        <div className="filter-right">
          <div className="filter-item clickable" onClick={toggleRecommendVisibility}>
            Recommended
            <span className={`toggle-icon ${!recommendVisible ? "rotate" : ""}`}>
              ^
            </span>
          </div>
          {recommendVisible && (
            <div className="recommend-options">
              <div className="filter-option">Newest first</div>
              <div className="filter-option">Popular</div>
              <div className="filter-option">Price : high to low</div>
              <div className="filter-option">Price : low to high</div>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Filter;
