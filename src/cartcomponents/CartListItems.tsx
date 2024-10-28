import ProductInCart from "../components/ProductInCart";
import { CardProps } from "../types/types"
import DisplayTotal from "./DisplayTotal";


type Props = {
  cartItems: CardProps[];
  onSetCartItems?: ((update: (item: CardProps[]) => CardProps[]) => void)
  onShowPayment: () => void

}
export default function CartListItems({ cartItems, onSetCartItems, onShowPayment }: Props) {



  function handleDelete(id: number) {
    onSetCartItems?.((prev: CardProps[]) => prev.filter((item: CardProps) => item?.id !== id))
  }

  return (
    <div>
      {cartItems?.map((product: CardProps) => (
        <ProductInCart
          key={product?.id}
          product={product}
          onHandleDelete={handleDelete}

        />
      ))}

      <DisplayTotal cartItems={cartItems} onShowPayment={onShowPayment} />
    </div>
  )

}
