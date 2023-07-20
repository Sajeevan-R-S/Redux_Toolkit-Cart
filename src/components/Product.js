import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Product = () => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  const addToCart = (product) => {
    dispatch(add(product))
  }

  return <div style={{
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    margin: "30px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100px"
  }} >
    {products.map((product) => (
      <div key={product.id} style={{
        width: "350px",
        height: "500px",
        border: "2px solid red",
        borderRadius: "30px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "space-between"
      }}>
        <img src={product.image} alt="product" style={{width: "100px", objectFit: "contain", alignSelf: "center"}} />
        <h3>{product.title}</h3>
        <h4>{product.price}</h4>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)} style={{padding: 10, borderRadius: "30px", color: "white", backgroundColor: "blue"}}>Add to cart</button>
      </div>
    ))}
  </div>;
};

export default Product;
