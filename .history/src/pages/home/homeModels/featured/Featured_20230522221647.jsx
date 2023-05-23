import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import { useProducts } from '../../../../context/ProductContext'

const StyledCategoryCardWrapper = styled.div`
@media(min-width: 768px){
    
}

`

const Featured = () => {
  const { featuredProducts } = useProducts()
  console.log(featuredProducts)
  return (
    <>
      <StyledCategoryCardWrapper>
        {featuredProducts?.map((product) => (
          <div key={product._id}>
            <img src={product.imgSrc} alt="" />
          </div>
        ))}
      </StyledCategoryCardWrapper>
    </>
  )
}

export default Featured
