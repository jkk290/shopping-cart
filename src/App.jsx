import { useState } from 'react'
import './App.css'
import NavBar from './assets/components/NavBar'
import { Outlet } from 'react-router'
import { cartContext } from './assets/cartContext'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  }

  const contextValue = {
    items: cartItems,
    addItem: addToCart,
  };

  const totalItemsCount = cartItems.reduce((sum, item) => {
    return sum + item.qty;
  }, 0);
  
  return (
    <cartContext.Provider value={contextValue}>
      <NavBar itemCount={totalItemsCount}/>
        <Outlet />
    </cartContext.Provider>
    
  )
}

export default App
