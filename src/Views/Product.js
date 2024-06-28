import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Loader from "../Components/Loader.js";
function Product() {
  const { id } = useParams();
  const url = `https://667e8eb6f2cb59c38dc62b18.mockapi.io/kocData/${id}`;
  const [product, setProduct] = useState({
    loading: true,
      data: null,
    error:false
  });

  let content = null;
    useEffect(() => {
        axios.get(url).then((response) => {
            setProduct({ loading: false, data: response.data, error: false });
        })
      .catch (()=> {
            setProduct({ loading: false, data: null, error: true });
        })
  }, [url]);

  if (product.loading) {
    content = <Loader />;
    }
    if (product.error) {
      content = <p>There was an error please refresh or try again later!</p>
    }
  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img src={product.data.avatar} alt={product.data.name} />
        </div>
        <div className="font-bold text-xl mb-3">{product.data.details}</div>
        <div>{product.data.createdAt}</div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Product;
