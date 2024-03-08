import React, { useEffect, useState } from "react";
import data from "../data";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]); // To store your products
  const navigate = useNavigate();

  useEffect(() => {
    // Load your data only once when the component mounts
    data
      .then((fetchedData) => {
        setProducts(fetchedData);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  }, []);

  function inputHandler(event) {
    setSearch(event.target.value);
  }

  function searchHandler() {
    // Now searching in the state `products` instead of the direct `data` import
    const product = products.find(
      (dataItem) => dataItem.title.toLowerCase() === search.toLowerCase()
    );
    if (product) {
      navigate(`/${product.id}`);
    } else {
      window.alert("Product not found");
      // Handle the case where the product is not found, e.g., show an alert or a message
    }
  }

  return (
    <div className="header">
      <div className="titleSearch">
        <Link className="link" to="/">
          <h2>FAKE STORE</h2>
        </Link>
        <div>
          <input
            type="text"
            name="search"
            placeholder="type the name of the product"
            value={search}
            onChange={inputHandler}
          />
          <button onClick={searchHandler}>
            <span className="material-symbols-outlined icon">search</span>
          </button>
        </div>
        <Link className="link" to="/">
          <h2>HOME </h2>
        </Link>
      </div>
      <div></div>
    </div>
  );
}
export default Header;
