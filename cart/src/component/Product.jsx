import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import {addToCart} from "../features/cartSlice"

function Product() {
  const items = useSelector((state)=>state.allCart.items);
  const dispatch = useDispatch();
  return (
    <div className='productContainer'>
      <div className='card'>
        {items.map((item)=>(
    
          <div key={item.id}>
            
            
          <img className='img' src= {item.img}></img>
          <h2>{item.title}</h2>
          <p>Price : {item.price}  $+</p>
          <button onClick={()=>dispatch(addToCart(item))}>add To Cart</button>
          <hr/>

          </div>
        
        ))}
      </div>

    </div>
  )
}

export default Product