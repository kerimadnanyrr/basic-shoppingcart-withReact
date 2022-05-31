import React from 'react'
import styled from "styled-components"
import Product from './Product'


function Main({ product,OnAdd }) {
  const Container = styled.div`
  display:flex;
  justify-content:center;
  
  width:56%;
  margin-top:30px;
  background-color: #E5CB9F;
border-radius:15px;
margin-left: 36px;
max-height: 30%;
float:left;
justify-content: start;



`

  const Main = styled.div`
display:flex; 
margin-left: 20px;
flex-direction: column;
width:22%;
margin-top:30px;
background-color: #E5CB9F;


`
  return (
    <Container>

      <Main>

        <h1>Products</h1>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {
            product.map((product) => (
              <Product product={product} OnAdd={OnAdd}></Product>
            ))}

        </div>




      </Main>
    </Container>
  )
}

export default Main