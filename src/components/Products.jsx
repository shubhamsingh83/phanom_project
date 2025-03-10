import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "../assests/Filters.png";
import "./Products.css";

function Products({ showFilter }) {
  const [products, setProducts] = useState([]);
  // const [customizeVisible, setCustomizeVisible] = useState(false);
  // const [menVisible, setMenVisible] = useState(false);
  // const [womenVisible, setWomenVisible] = useState(false);
  // const [childrenVisible, setChildrenVisible] = useState(false);
  // const [allVisible, setAllVisible] = useState(false);

  // const toggleAllVisibility = () => {
  //   setAllVisible(!allVisible);
  // };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made, but the server responded with a status code outside of the range 2xx
          console.error("Server responded with an error:", error.response.data);
        } else if (error.request) {
          // The request was made, but no response was received
          console.error("No response received:", error.request);
        } else {
          // Something happened in setting up the request that triggered an error
          console.error("Error setting up request:", error.message);
        }
      });
  }, []);

  return (
    <div className="products-container">
      {/* <div className="sidebar">
        {showFilter && (
          <div className="filter-options">
            <div className="filter-option clickable" onClick={() => setCustomizeVisible(!customizeVisible)}>
              Customize
            </div>
            <div className="filter-option clickable" onClick={() => setMenVisible(!menVisible)}>
              Men
            </div>
            <div className="filter-option clickable" onClick={() => setWomenVisible(!womenVisible)}>
              Women
            </div>
            <div className="filter-option clickable" onClick={() => setChildrenVisible(!childrenVisible)}>
              Children
            </div>
            <div className="filter-option clickable" onClick={toggleAllVisibility}>
              All
              <span className={`toggle-icon ${allVisible ? "rotate" : ""}`}>^</span>
            </div>
            {allVisible && (
              <div className="all-options">
                <div className="filter-option">Option 1</div>
              </div>
            )}
          </div>
        )}
      </div>  */}

      <div>
        {showFilter && (
          <div className="filterImage">
            <img src={Filter} alt="Filter" />
          </div>
        )}
      </div>

      <div className={"products " + (showFilter ? "fullwidth" : "halfwidth")}>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <h4>{product.title.length > 50 ? product.title.slice (0,50) + "..." : product.title}</h4>
              <p>Sign in to see pricing</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
