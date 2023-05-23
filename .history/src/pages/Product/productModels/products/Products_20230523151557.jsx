import { useProducts } from '../../../../context/ProductContext'
import Card from '../../../../components/card/Card'

import { Styled } from 'styled-components'

const StyledProducts = styled

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
            <Card key={product._id} props={product} />
          ))}
        </div>
      </>
    )
  }
}

export default Products
