type ImageProps = {
  image: {
    thumbnail: string,
    mobile: string,
    tablet: string,
    desktop: string
  }
}


export default function ResponsiveImage({ image }: ImageProps) {
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={image.desktop} />
      <source media="(min-width: 768px)" srcSet={image.tablet} />
      <source media="(min-width: 480px)" srcSet={image.mobile} />
      <img src={image.mobile} alt="Product Image" />
    </picture>
  )
}