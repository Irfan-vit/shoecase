import { useProducts } from '../../../../context/ProductContext'
import Card from '../../../../components/card/Card'

import { styled } from 'styled-components'

const StyledProducts = styled.div`
`

const Products = () => {
  const { filteredProducts, getProducts } = useProducts()
  if (getProducts.isLoading) {
    return <h1>Loading</h1>
  }
  if (getProducts.isSuccess) {
    return (
      <>
        <StyledProducts>
          {filteredProducts?.map((product) => (
            <Card key={product._id} props={product} />
          ))}
        </div>
      </>
    )
  }
}

export default Products
