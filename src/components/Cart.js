import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';


const Cart = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart)

  const removeItem = (id) => {
    dispatch(remove(id))
  }

  return (
    <div style={{
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      margin: "30px",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "100px"
    }} >
      {cartItems.map((cartItem) => (
        <div key={cartItem.id} style={{
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
          <img src={cartItem.image} alt="product" style={{width: "100px", objectFit: "contain", alignSelf: "center"}} />
          <h3>{cartItem.title}</h3>
          <h4>{cartItem.price}</h4>
          <p>{cartItem.description}</p>
          <button onClick={() => removeItem(cartItem.id)} style={{padding: 10, borderRadius: "30px", color: "white", backgroundColor: "Red"}}>Remove from Cart</button>
        </div>
      ))}
    </div>
  )
}

export default Cart