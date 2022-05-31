
import './App.css';
import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';
import data from './components/data';
import { useState } from 'react';


function App() {
  const { product } = data;
  const [cartItems, setCartitems] = useState([]);
  const OnAdd = (product) => {
    console.log(cartItems);
    const exist = cartItems.find((c) => c.id === product.id);
    if (exist) 
    {
      setCartitems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
    }
    else{
      setCartitems([...cartItems,{...product, qty:1}])
    }
  }

  const OnRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartitems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartitems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  
  return (
    <div >
      <Header countCartItems={cartItems.length}></Header>
      <div>
        <Main product={product} OnAdd={OnAdd}  ></Main>
        <Basket cartItems={cartItems} OnAdd={OnAdd} OnRemove={OnRemove}> </Basket>
      </div>
    </div>
  );
}

export default App;
