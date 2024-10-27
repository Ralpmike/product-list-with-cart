import { CardProps } from "../types/types"
import PaymentButton from "../ui/PaymentButton"

type Props = {
  cartItems: CardProps[];
  onShowPayment?: () => void;
}

export default function DisplayTotal({ cartItems, onShowPayment }: Props) {
  const total = cartItems.reduce((acc, item) => acc + item.price * (item?.quantity || 0), 0)

  return (
    <div className="mt-4 flex flex-col gap-4">

      <div className="flex justify-between items-center">
        <p>Order Total</p>
        <h3 className="text-[1.75rem] font-bold text-[var(--Rose-900)]">${total.toFixed(2)}</h3>
      </div>

      <div className="flex items-center justify-center bg-[var(--Rose-50)] p-3 rounded-lg gap-2">
        <img src="/images/icon-carbon-neutral.svg" alt="carbon" />
        <p>This is a <span className="text-[var(--Rose-500)] font-bold">carbon neutral</span> delivery</p>
      </div>


      <PaymentButton className="bg-[var(--Red)] w-full text-white py-4 rounded-[30px] hover:bg-[var(--Red-900)]" onClick={onShowPayment}>
        Confirm Order
      </PaymentButton>


    </div>
  )
}

