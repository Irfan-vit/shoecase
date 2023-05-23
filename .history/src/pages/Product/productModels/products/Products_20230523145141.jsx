import { useProducts } from '../../../../context/ProductContext'
const Products = () => {
  const { filteredProducts } = useProducts()
  return (
    <>
      <div>{filteredProducts?.map((product)=>)}</div>
    </>
  )
}

export default Products
