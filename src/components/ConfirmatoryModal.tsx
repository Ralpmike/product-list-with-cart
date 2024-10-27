import { CardProps } from "../types/types"
import PaymentButton from "../ui/PaymentButton"

type Props = {
  cartItems: CardProps[];
  onResetCart: () => void;
}

export default function ConfirmatoryModal({ cartItems, onResetCart }: Props) {

  const total = cartItems.reduce((acc, item) => acc + item.price * (item?.quantity || 0), 0)
  return (
    <div className=' bg-white max-w-[640px] w-full p-8 rounded-lg'>
      <img src="/images/icon-order-confirmed.svg" alt="" />
      <h2 className='font-bold text-[var(--Rose-900)] my-4 text-[2rem] sm:text-[2rem] md:text-[2.5rem] xl:text-[3rem]'>Order Confirmed</h2>
      <p className='text-[1.125rem] text-[var(--Rose-500)] mb-2'>We hope you enjoy your food</p>

      <div className='bg-[var(--Rose-50)] flex flex-col gap-4 max-h-[300px] overflow-y-scroll '>
        {
          cartItems?.map((item) => (
            <div className='flex justify-between items-center p-4 border-b-[1px] border-[var(--Rose-100)]' key={item.id}>
              <div>
                <h2 className="text-[1.125rem] font-medium my-2">{item.name}</h2>
                <span className="text-[var(--Red)] font-medium">{item.quantity}x</span>
                <span className="mx-[10px] text-[var(--Rose-400)]">@${item.price.toFixed(2)}</span>

              </div>

              <p className="text-[var(--Rose-500)] font-bold">${(item.price * (item?.quantity || 0)).toFixed(2)}</p>
            </div>

          ))
        }
        <div className="flex justify-between items-center p-4">
          <p>Order Total</p>
          <h3 className="text-[1.75rem] font-bold text-[var(--Rose-900)]">${total.toFixed(2)}</h3>
        </div>
      </div>
      <PaymentButton className='bg-[var(--Red)] my-5 w-full text-white py-4 rounded-[30px] hover:bg-[var(--Red-900)]' onClick={onResetCart}>
        Start New order
      </PaymentButton>
    </div>
  )
}