import React, { useEffect, useState } from "react";

export default function FetchApi() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(`Data Received `);
        console.log(data);
        setProducts((prev) => data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Data is currently loading</div>
      ) : (
        <div>
          {products.map((product) => (
            <div className="mt-5">
              <div>{product.id}</div>
              <div>{product.title}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
