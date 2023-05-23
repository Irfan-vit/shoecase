import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'

const Card = () => {
  return (
    <>
      <Link>
        <figure>
          <div>
            <img src="" alt="" />
          </div>
          <figcaption>
            <h3>title</h3>
            <p>categoryName</p>
            <p className="product-price">₹ price</p>
            <Rating initialValue={4} transition size={20} />
          </figcaption>
        </figure>
      </Link>
    </>
  )
}

export default Card
