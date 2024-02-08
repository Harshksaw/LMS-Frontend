import React from 'react'
import { useDispatch, useSelector } from "react-redux"


function Cart() {
  const {total , totalItems} = useSelector((state)=> state.auth)
  return (
    <div>
      <h1>Cart</h1>

      <p>
        Total Items : {totalItems}
      </p>
      {
        total >0 ? (
          <div>
            <RenderCartCourses/>
            <RenderTotalItems/>
          </div>
        ): (
          <p>
            No Items in the cart
          </p>
          )

      }

      
    </div>
  )
}

export default Cart
