import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'

const Card = (props) => {
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
            <Link to={`/product/`}>
              <button varient="outline">View Details</button>
            {/* </Link> */}
          </figcaption>
        </figure>
      </Link>
    </>
  )
}

export default Card
