import { useProducts } from '../../../../context/ProductContext'
import Card from '../../../../components/card/Card'
const Products = () => {
  const { filteredProducts, getProducts } = useProducts()
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
  } else if (getProducts.isSuccess)}
}

export default Products
