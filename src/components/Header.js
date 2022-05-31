import React from 'react'
import styled from "styled-components"


function Header({countCartItems}) {
  const Container = styled.div`
  display:flex;
  justify-content:center;
`
 
 
 
  const Head = styled.div`
 height: 68px;
 background-color: #E5CB9F;
align-items: center;
 display:flex;
 justify-content:space-between;
 width: 95%;
 margin-top: 10px;
 border-radius:15px;
 


  `
  const Title = styled.div`
  margin-left: 10px;
  display:flex;
font-weight: 500;
color:blueviolet;
font-size:40px;

  `

  const Links = styled.div`
padding-right: 10px;
   `

  return (
    <Container>
      <Head>
        <Title>Small Shopping Cart</Title>
        <Links>
          <a href="#cart">
            
          

          Cart{' '}

          {
            countCartItems? (
              <button className="badge">{countCartItems}</button>
            ):('')
          }
             </a>
          <a href="#"> Sign İn</a>
        </Links>
      </Head>
     
    </Container>

  )
}

export default Header