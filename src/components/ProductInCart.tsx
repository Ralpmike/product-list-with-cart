
import { CardProps } from "../types/types"

type productProps = {
  product: CardProps
  onHandleDelete: (id: number) => void
}

export default function ProductInCart({ product, onHandleDelete }: productProps) {
  return (
    <div className="flex items-center justify-between border-b-2 py-2">
      <div>
        <h2 className="text-[1.125rem] font-medium my-2">{product.name}</h2>
        <span className="text-[var(--Red)] font-medium">{product.quantity}x</span>
        <span className="mx-[10px] text-[var(--Rose-400)]">@${product.price.toFixed(2)}</span>
        <span className="text-[var(--Rose-500)] font-bold">${(product.price * (product?.quantity || 0)).toFixed(2)}</span>
      </div>
      <div className="text-[1.125rem] text-[var(--Rose-500)]  w-[30px]" onClick={() => onHandleDelete(product.id)} >
        <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="color-[var(--Red)]">
          <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
        </svg>
      </div>
    </div>
  )
}