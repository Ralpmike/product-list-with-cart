
import Card from './components/Card'
import CartComponent from './components/CartComponent'
import { desserts } from "./data/data"
import { useEffect, useState } from 'react'
import { CardProps } from './types/types'
import ConfirmatoryModal from './components/ConfirmatoryModal'

function App() {

  const [cartItems, setCartItems] = useState<CardProps[]>(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems") || "[]") : [])
  const [showPayment, setShowPayment] = useState<boolean>(false)

  function handleShowModal() {
    setShowPayment(true)
  }

  function handleCloseModal() {
    setShowPayment(false)
  }

  function resetCart() {
    setCartItems([])
    setShowPayment(false)
  }


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <div className='App max-w-[1440px] mx-auto w-full relative bg'>
      <Card
        desserts={desserts}
        cartItems={cartItems}
        onSetCartItems={setCartItems}
      />
      <CartComponent cartItems={cartItems} onSetCartItems={setCartItems} onShowPayment={handleShowModal} />
      {
        showPayment ? (
          <div className='bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 w-full h-full flex justify-center items-center'
            onClick={handleCloseModal}>

            <div onClick={(e) => e.stopPropagation()} className='w-full max-w-[580px] max-h-[700px] bg-white rounded'>
              <ConfirmatoryModal cartItems={cartItems} onResetCart={resetCart} />
            </div>
          </div>
        ) : null
      }
    </div>
  )
}

export default App


