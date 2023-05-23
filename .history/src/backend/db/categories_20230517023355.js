import { v4 as uuid } from 'uuid'

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'casual',
    imgSrc: casual,
  },
  {
    _id: uuid(),
    categoryName: 'sports',
    imgSrc: sports,
  },
  {
    _id: uuid(),
    categoryName: 'fitness',
    imgSrc: fitness,
  },
  {
    _id: uuid(),
    categoryName: 'track',
    imgSrc: track,
  },
]
