
import Card from './components/Card'
import CartComponent from './components/CartComponent'
import { desserts } from "./data/data"
import { useEffect, useState } from 'react'
import { CardProps } from './types/types'

function App() {

  const [cartItems, setCartItems] = useState<CardProps[]>(() => localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems") || "[]") : [])


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <div className='App max-w-[1440px] mx-auto w-full'>
      <Card
        desserts={desserts}
        cartItems={cartItems}
        onSetCartItems={setCartItems}
      />
      <CartComponent cartItems={cartItems} onSetCartItems={setCartItems} />
    </div>
  )
}

export default App
