import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../Components/Loader.js";
import ProductCard from "../Components/ProductCard.js";
function Home() {
  const [products, setProducts] = useState({
    loading: true,
    data: null,
    error: false,
  });

  let content = null;
  const url =
    "https://667e8eb6f2cb59c38dc62b18.mockapi.io/kocData?page=1&limit=10";

  const fetchProducts = async () => {
    try {
      const res = await axios.get(url);
      setProducts({ loading: false, data: res.data, error: false });
    } catch (err) {
      setProducts({ loading: false, data: null, error: true });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [url]);

  if (products.loading) {
    content = <Loader />;
  }
  if (products.error) {
    content = <p>There was an error please refresh or try again later!</p>;
  }
  if (products.data) {
    content = products.data.map((product, key) => (
      <div key={key}>
        <ProductCard product={product} />
      </div>
    ));
  }
  return (
    <div className="text-center">
      <h1 className="font-bold text-4xl mb-10">Best 10 Sellers</h1>
      {content}
    </div>
  );
}

export default Home;
