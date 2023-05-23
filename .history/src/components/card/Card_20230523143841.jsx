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
            <p className="product-price">₹ {props.price}</p>
            <Rating initialValue={pro.rating} transition size={20} />
            <Link to={`/product/`}>
              <button varient="outline" className="btn btn-otl-default">
                View Details
              </button>
            </Link>
          </figcaption>
        </figure>
      </Link>
    </>
  )
}

export default Card
