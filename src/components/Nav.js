import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Nav = () => {

  const cartItems = useSelector(state => state.cart)

  const navigate = useNavigate();

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      backgroundColor: "blue",
      color: "white",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
    }}>
      <h3 onClick={() => navigate('/') }>RT SM</h3>
      <h4 onClick={() => navigate("/cart")}>Cart <span>{cartItems.length}</span></h4>
    </div>
  )
}

export default Nav