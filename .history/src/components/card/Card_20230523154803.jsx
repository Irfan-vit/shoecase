import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'

import { styled } from 'styled-components'

const StyledProduct = styled.figure`
  > a > div > img {
    height: 100%;
    width: 100%;
  }
  @media (min-width: 550px) {
    flex-basis: 24%;
    /* flex-grow: 1; */
    > a {
      display: flex;
      flex-flow: column wrap;
      gap: 1%;
      min-height: 100vh;
      > div {
        /* flex-grow: 1; */
        flex-basis: 30%;
      }
      > figcaption {
        /* flex-grow: 1; */
        flex-basis: 30%;
      }
    }
  }
`

const Card = ({ props }) => {
  return (
    <>
      <StyledProduct>
        <Link>
          <div>
            <img src={props.imgSrc} alt="" />
          </div>
          <figcaption>
            <h3>{props.title}</h3>
            <p>{props.categoryName}</p>
            <p>₹ {props.price}</p>
            <Rating initialValue={props.rating} transition size={20} />
            <button varient="outline">View Details</button>
          </figcaption>
        </Link>
      </StyledProduct>
    </>
  )
}

export default Card
