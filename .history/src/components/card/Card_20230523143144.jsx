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
          </figcaption>
        </figure>
      </Link>
    </>
  )
}

export default Card
