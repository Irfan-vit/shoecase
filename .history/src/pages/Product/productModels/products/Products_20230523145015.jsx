import { useProducts } from '../../../../context/ProductContext'
const Products = () => {
  const { filteredProducts } = useProducts()
  return (
    <>
      <div>{filteredProducts}</div>
    </>
  )
}

export default Products
