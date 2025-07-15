import { useState } from 'react'
import * as styles from './App.module.css';
import NavBar from './assets/components/NavBar'
import { Outlet } from 'react-router'
import { cartContext } from './assets/cartContext'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const prevIndex = prevItems.findIndex((item) => item.id === product.id)

      if (prevIndex === -1) {
        return [...prevItems, product]
      } else {
        const newQty = prevItems[prevIndex].qty + product.qty
        return prevItems.map((item) => { 
          if (item.id === product.id) {
            return {...item, qty: newQty}
          }
          return item;
        })
      }
    });
  }

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId))
  }

  const updateItemQty = (productId, newQty) => {
    setCartItems((prevItems) => {
      const prevIndex = prevItems.findIndex((item) => item.id === productId)

      if (prevIndex === -1) {
        return prevItems
      } else {
        return prevItems.map((item) => {
          if (item.id === productId) {
            return {...item, qty: newQty}
          }
          return item;
        })

      }
    })
  }

  const contextValue = {
    items: cartItems,
    addItem: addToCart,
    removeItem: removeFromCart,
    updateItemQty: updateItemQty,
  };

  const totalItemsCount = cartItems.reduce((sum, item) => {
    return sum + item.qty;
  }, 0);
  
  return (
    <cartContext.Provider value={contextValue}>
      <header>
        <NavBar itemCount={totalItemsCount}/>
      </header>
      <main>
        <Outlet />
      </main>
         
      
    </cartContext.Provider>
    
  )
}

export default App
