import { CardProps } from "../types/types"
import EmptyCart from "../cartcomponents/EmptyCart";
import CartListItems from "../cartcomponents/CartListItems";


type Props = {
  cartItems: CardProps[];
  onSetCartItems?: ((update: (item: CardProps[]) => CardProps[]) => void)
  onShowPayment: () => void
}

export default function CartComponent({ cartItems, onSetCartItems, onShowPayment }: Props) {

  const showCart = cartItems?.length > 0

  return (
    <div className="bg-white p-4 rounded-lg h-fit flex flex-col gap-4">
      <h2 className="font-bold text-[var(--Red)] clamp-h2-text">Your cart ({cartItems?.length})</h2>
      <div className="cart-items">
        {showCart ? <CartListItems cartItems={cartItems} onSetCartItems={onSetCartItems} onShowPayment={onShowPayment} /> : <EmptyCart />}
      </div>
    </div>
  )
}






// function CartListItems({ cartItems, onSetCartItems }: Props) {



//   function handleDelete(id: number) {
//     onSetCartItems?.((prev: CardProps[]) => prev.filter((item: CardProps) => item?.id !== id))
//   }



//   useEffect(() => {
//     const storedItems = JSON.parse(localStorage.getItem("cartItems") || "[]")
//     if (storedItems) {
//       onSetCartItems?.(storedItems)
//     }
//   }, [onSetCartItems])


//   return (
//     <div>
//       {cartItems?.map((product: CardProps) => (
//         <ProductInCart
//           key={product.id}
//           product={product}
//           onHandleDelete={handleDelete}

//         />
//       ))}

//       <DisplayTotal cartItems={cartItems} />
//     </div>
//   )

// }

// type productProps = {
//   product: CardProps
//   onHandleDelete: (id: number) => void
// }

// function ProductInCart({ product, onHandleDelete }: productProps) {
//   return (
//     <div className="flex items-center justify-between border-b-2 py-2">
//       <div>
//         <h2 className="text-[1.125rem] font-medium my-2">{product.name}</h2>
//         <span className="text-[var(--Red)] font-medium">{product.quantity}x</span>
//         <span className="mx-[10px] text-[var(--Rose-400)]">@${product.price.toFixed(2)}</span>
//         <span className="text-[var(--Rose-500)] font-bold">${(product.price * (product?.quantity || 0)).toFixed(2)}</span>
//       </div>
//       <div className="text-[1.125rem] text-[var(--Rose-500)]  w-[30px]" onClick={() => onHandleDelete(product.id)} >
//         <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="color-[var(--Red)]">
//           <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
//         </svg>
//       </div>
//     </div>
//   )
// }

