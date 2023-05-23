import { useProducts } from '../../../../context/ProductContext'
import Card from '../../../../components/card/Card'
const Products = () => {
  const { featuredProducts } = useProducts()

  return (
    <>
      <div>
        {featuredProducts?.map((product) => (
          <Card props={product} />
        ))}
      </div>
    </>
  )
}

export default Products
