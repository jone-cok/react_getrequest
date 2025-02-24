import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="border mb-4 rounded overflow-hidden flex">
      <Link to={`/product/${props.product.id}`}>
        <div
          style={{ 'backgroundImage': `url('${props.product.avatar}')` ,}}
          className="w-64 h-64 bg-blue bg-cover bg-center"
        ></div>
      </Link>
      <div className="p-3">
        <h3 className="font-bold text-xl mb-3">
          <Link to={`/product/${props.product.id}`}>{props.product.name}</Link>
        </h3>
        <div className="font-bold  mb-3">
          <Link to={`/product/${props.product.id}`}>
            {props.product.details}
          </Link>
        </div>
        <div className=" mb-3">
          <Link to={`/product/${props.product.id}`}>
            {props.product.createdAt}
          </Link>
        </div>
        <Link to={`/product/${props.product.id}`} className="bg-blue-500 text-white p-2 flex justify-center">
          View
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
