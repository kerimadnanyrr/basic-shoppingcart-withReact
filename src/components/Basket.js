import React from 'react'
import styled from "styled-components"
function Basket({ cartItems, OnAdd, OnRemove }) {
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  const taxprice = itemPrice * 0.14;
  const Totalprice = itemPrice + taxprice;
  const Container = styled.div`
  display:flex;

width:37%;
margin-top:30px;
background-color: #E5CB9F;
border-radius:15px;
margin-left: 36px;
min-height: 100px;
float:left;
`
  const Basket = styled.div`
margin-left: 20px;
margin-top:30px;
background-color: #E5CB9F;
`
  return (
    <Container>
      <Basket>
        <h1>Your Cart</h1>
        {
          cartItems.length === 0 && <div>Your Carts İs Empty</div>
        }
        {

          cartItems.map((item) => (
            <div className='row' >

              <div className="col"><h6 >{item.name}</h6></div>
              <div className="col"> <button onClick={() => OnAdd(item)} className='btn btn-success'>+    </button>
                <button onClick={() => OnRemove(item)} className='btn btn-danger'>-</button></div>
              <div className="col">
                {item.qty} x{item.price}
              </div>



            </div>
          ))
        }
        <div className='textright'>

          {
            cartItems.length !== 0 && (

              <div className='row'>

                <div>Items price</div>
                <div>{itemPrice}</div>


                <div>Tax price</div>
                <div>{taxprice.toFixed(2)}</div>


                <div> <strong>Total price</strong> </div>
                <div> {Totalprice}</div>
              </div>
            )

          }
        </div>

      </Basket>

    </Container>
  )
}

export default Basket