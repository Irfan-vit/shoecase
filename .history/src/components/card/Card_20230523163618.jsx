import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'

import { styled } from 'styled-components'

const StyledProduct = styled.figure`
  > a > div > img {
    width: 100%;
    height: auto;
    aspect-ratio: 1/0.8;
    object-fit: cover;
  }

  @media (min-width: 550px) {
    flex-basis: 49%;
    > a {
      display: flex;
      flex-flow: column wrap;
      gap: 1%;
    }
  }

  @media (min-width: 900px) {
    flex-basis: 24%;
    > a {
      display: flex;
      flex-flow: column wrap;
      gap: 1%;
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
