import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'

import { styled } from 'styled-components'

const StyledProduct = styled(Link)`
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    > a > figure {
      flex-basis: 24%;
    }
  }
`

const Card = ({ props }) => {
  return (
    <>
      <Link>
        <figure>
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
        </figure>
      </Link>
    </>
  )
}

export default Card
