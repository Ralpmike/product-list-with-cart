import { CardProps } from "../types/types"
import CardItem from "./CardItem"

type ComponentProp = {
  onSetCartItems?: (update: (item: CardProps[]) => CardProps[]) => void,
  cartItems?: CardProps[],
  desserts?: CardProps[],

}

export default function Card({ desserts, onSetCartItems, cartItems }: ComponentProp) {

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




