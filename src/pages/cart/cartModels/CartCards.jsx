// import Empty from '../../components/animations/Loaders/Empty'
import { useState } from 'react'
import CartCard from '../../../components/card/CartCard'
import axios from 'axios'

import {
  StyledCartCardsWrapper,
  StyledOrderContetntWrapper,
} from '../../../styles/index'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../../../context/AuthContext'
import { getCart } from '../../../api/cart'

const CartCards = () => {
  const { token } = useAuth()
  const getCartQuery = useQuery(['getCart', token], getCart)
  const data = getCartQuery.data
  return (
    <>
      <StyledOrderContetntWrapper>
        <div>
          <div>
            <h2>Order Summary</h2>
            <p>delivery Charges</p>
            <p>Tax: </p>
            <h3>Sub Total:</h3>
          </div>

          <button>Check Out</button>
        </div>
      </StyledOrderContetntWrapper>
      <StyledCartCardsWrapper>
        {data?.length <= 0 || !data ? (
          <div>
            <h1>Empty</h1>
          </div>
        ) : (
          data.map(({ _id, title, price, categoryName, imgSrc, rating }) => (
            <CartCard
              key={_id}
              _id={_id}
              price={price}
              title={title}
              imgSrc={imgSrc}
              rating={rating}
              categoryName={categoryName}
            />
          ))
        )}
      </StyledCartCardsWrapper>
    </>
  )
}

export default CartCards
