import { useProducts } from '../../../../context/ProductContext'
import Card from '../../../../components/card/Card'
const Products = () => {
  const { filteredProducts, getProducts } = useProducts()
  i
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

export default Products
