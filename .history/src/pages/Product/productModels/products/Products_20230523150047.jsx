import { useProducts } from '../../../../context/ProductContext'
import Card from '../../../../components/card/Card'
const Products = () => {
  const { featuredProducts } = useProducts()
  if (getProducts.isLoading) {
    return <h1>Loading</h1>
  }
  if (getProducts.isSuccess) {
    return (
      <>
        <div>
          {filteredProducts?.map((product) => (
            <Card props={product} />
          ))}
        </div>
      </>
    )
  }
}

export default Products
