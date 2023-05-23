import { useProducts } from '../../../../context/ProductContext'
import Card from '../../../../components/card/Card'
const Products = () => {
  const { filteredProducts } = useProducts()
  return (
    <>
      <div>
        {console.log()}
        {filteredProducts?.map((product) => (
          <Card props={product} />
        ))}
      </div>
    </>
  )
}

export default Products
