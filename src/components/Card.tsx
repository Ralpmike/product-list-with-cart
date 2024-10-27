import { CardProps } from "../types/types"
import Button from "../ui/Button"

type ComponeentProp = {
  onSetCartItems?: (update: (item: CardProps[]) => CardProps[]) => void,
  cartItems?: CardProps[],
  desserts?: CardProps[],

}

export default function Card({ desserts, onSetCartItems, cartItems }: ComponeentProp) {

  return (
    <div className="container">
      <h1 className="text-[3rem] font-bold text-[var(--Rose-900)]">Desserts</h1>
      <div className="card-container">
        {
          desserts?.map((dessert) => (
            <CardItem
              dessert={dessert}
              key={dessert.id}
              cartItems={cartItems}
              onSetCartItems={onSetCartItems}
            />
          ))
        }
      </div>
    </div>
  )
}


type CartItemProps = {
  onSelectItem?: (id: number | null) => void
  selectedItemId?: number | null
  dessert?: CardProps,
  onSetCartItems?: ((update: (item: CardProps[]) => CardProps[]) => void)
  cartItems?: CardProps[],
}



function CardItem({ dessert, onSetCartItems, cartItems }: CartItemProps) {
  const { id, image, name, category, price } = dessert as CardProps
  // const [selectedItemId, setSelectedItemId] = useState<number | null>(null)


  const isInCart = cartItems?.some((item) => item.id === id)
  const currentItem = cartItems?.find((item) => item.id === id)



  const quantity = currentItem?.quantity || 0


  function handleIncrement(id: number) {

    onSetCartItems?.((prev: CardProps[]) => (
      prev?.map((item: CardProps) => item?.id === id ? { ...item, quantity: (item?.quantity || 0) + 1 } : item
      )))

  }

  function handleDecrement(id: number) {
    console.log("quantity", quantity);

    if (quantity <= 1) {
      onSetCartItems?.((prev: CardProps[]) => prev.filter((item: CardProps) => item?.id !== id))
      // console.log((prev: CardProps[]) => prev?.filter((item: CardProps) => item?.id !== id));

    }
    else {
      onSetCartItems?.((prev: CardProps[]) => (
        prev?.map((item: CardProps) => item.id === id ? { ...item, quantity: (item?.quantity || 0) - 1 } : item)
      ))

    }


  }

  function handleSelectItem() {
    // setSelectedItemId(id)
    if (!isInCart && dessert) {
      onSetCartItems?.((prev: CardProps[]) => ([...prev, { ...dessert, quantity: 1 }]))
    }
  }

  let buttonType;

  if (isInCart) {
    buttonType =
      (<>
        <div className="btn-add" onClick={() => handleDecrement(id)}>
          <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14"></path>
          </svg>
        </div>
        <span className="text-white">{currentItem?.quantity}</span>
        <div className="btn-add" onClick={() => handleIncrement(id)}>
          <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
          </svg>
        </div>
      </>)


  } else {

    buttonType =
      (<>
        <img src="/images/icon-add-to-cart.svg" alt="Cart Icon" />
        <span> Add to Cart</span>
      </>
      )

  }



  return (
    <div className="card">
      {/* <img src={image.tablet} alt={name} /> */}
      <ResponsiveImage image={image} />
      <Button onClick={handleSelectItem} className={isInCart ? "btn-increment" : "btn"}>
        {buttonType}
      </Button>
      <div className="card-body">
        <p className="text-[var(--Rose-500)]">{category}</p>
        <h5 className="text-[var(--Rose-900)] font-medium ">{name}</h5>
        <p className="text-[var(--Red)] font-bold">${price.toFixed(2)}</p>
      </div>
    </div >
  )

}

type ImageProps = {
  image: {
    thumbnail: string,
    mobile: string,
    tablet: string,
    desktop: string
  }
}


function ResponsiveImage({ image }: ImageProps) {
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={image.desktop} />
      <source media="(min-width: 768px)" srcSet={image.tablet} />
      <source media="(min-width: 480px)" srcSet={image.mobile} />
      <img src={image.thumbnail} alt="Product Image" />
    </picture>
  )
}