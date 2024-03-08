import React from "react";
import { Link } from "react-router-dom";

function ProductTile(props) {
  return (
    <div className="productTile">
      <img src={props.image} alt={props.title}></img>
      <Link className="link" to={`/${props.id}`}>
        <h2>{props.title}</h2>
        <p>Price: ${props.price}</p>
        <p>Category: {props.category}</p>
      </Link>
    </div>
  );
}

export default ProductTile;
