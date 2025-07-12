import { useContext, useState } from 'react'
import './App.css'
import NavBar from './assets/components/NavBar'
import { Outlet } from 'react-router'
import { cartContext } from './assets/cartContext'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      [...prevItems, product]
    });
  }

  const contextValue = {
    items: cartItems,
    addItem: addToCart,
  };
  
  return (
    <cartContext.Provider value={contextValue}>
      <NavBar />
        <Outlet />
    </cartContext.Provider>
    
  )
}

export default App
