// export type DessertProps = {
//   desserts: CardProps[],
// }

export type CardProps = {
  id: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
  quantity?: number;
}