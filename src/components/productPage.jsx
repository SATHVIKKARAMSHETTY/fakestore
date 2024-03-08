import React, { useEffect, useState } from "react";
import data from "../data";
import { useParams } from "react-router-dom";
function ProductPage() {
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
  const { id } = useParams();
  const product = products.find((dataItem) => dataItem.id === Number(id));

  if (!product) {
    return <div>Loading product...</div>;
  }

  return (
    <div className="productPage">
      <div className="productPageImage">
        <img src={product.image} alt={product.title}></img>
      </div>
      <div className="pageDesc">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <hr />
        <h2>{`Price: $${product.price}`}</h2>
        <p>Inclusive of all taxes</p>
        <hr />
        <h2>{`Category: ${product.category}`}</h2>
      </div>
    </div>
  );
}

export default ProductPage;
