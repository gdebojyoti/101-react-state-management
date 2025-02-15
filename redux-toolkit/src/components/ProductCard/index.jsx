import './style.css'

const ProductCard = ({ data }) => {
  const { key, title, thumbnailUrl, price } = data
  return (
    <a href={`/product/${key}`} className='product-card'>
      <img src={thumbnailUrl} className='product-card__thumbnail' />
      <h2 className='product-card__title'>{title}</h2>
    </a>
  )
}

export default ProductCard