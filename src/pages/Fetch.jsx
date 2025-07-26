import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";

const Fetch = () => {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        let response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        setloading(false);
        setproducts(response.data);
      } catch (error) {
        setloading(false);
        seterror(error);
      }
    };

    makeRequest();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div>
          {error ? (
            <div>error loading products</div>
          ) : (
            products.map((product, index) => (
              <div key={index}>
                <h1>{product.title}</h1>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Fetch;
