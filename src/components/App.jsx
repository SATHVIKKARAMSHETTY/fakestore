import React, { useEffect, useState } from "react";
import data from "../data";
import ProductTile from "./productTile";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./productPage";

function Tiles() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    data
      .then((fetchedData) => {
        if (Array.isArray(fetchedData)) {
          setProducts(fetchedData);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="productTileParent">
      {products.map((item) => (
        <ProductTile
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          price={item.price}
          category={item.category}
        />
      ))}
    </div>
  );
}
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={Tiles()} />
        <Route path="/:id" element={<ProductPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
