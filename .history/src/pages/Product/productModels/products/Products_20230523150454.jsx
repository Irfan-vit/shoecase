import { useProducts } from '../../../../context/ProductContext'
import Card from '../../../../components/card/Card'
const Products = () => {
  const { filteredProducts, getProducts } = useProducts()
  if (getProducts.isLoading) {
    return <h1>Loading</h1>
  }
  if (getProducts.isSuccess) {
    return (
      <>
        <div>
          {filteredProducts?.map((product) => (
            <Card product={product} />
          ))}
        </div>
      </>
    )
  }
}

export default Products
