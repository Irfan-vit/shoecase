import { useProducts } from '../../../../context/ProductContext'
import Card from '../../../../components/card/Card'

import { styled } from 'styled-components'

const StyledProducts = styled.div`
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    > a {
      flex-basis: 24%;
    }
  }
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
        </StyledProducts>
      </>
    )
  }
}

export default Products
