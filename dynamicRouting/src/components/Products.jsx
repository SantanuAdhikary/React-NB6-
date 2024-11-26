import React, { useEffect, useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  let [data, setData] = useState([]);

  let getData = async () => {
    let resoponse = await fetch("https://fakestoreapi.com/products");
    let data = await resoponse.json();

    setData(data);
  };

  useEffect(() => {
    getData();
  });
  return (
    <>
      <div className="container">
        {data.map((ele, index) => {
          return (
            <div key={index} className="card">
              <img src={ele.image} alt="" />
              <h3> {ele.title.slice(0, 10)} </h3>
              <h4>{ele.price} </h4>

              <Link to={`${ele.id}`}>
                {" "}
                <p>get details</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
