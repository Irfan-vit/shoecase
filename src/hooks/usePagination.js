import { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'

export const usePagination = () => {
  const state = useSelector((state) => state.productsReducer)
  const [currPage, setCurrPage] = useState(0)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currPage])

  useEffect(() => {
    setCurrPage(0)
  }, [state.sort, state.categories])

  return { setCurrPage, currPage }
}
