import useProductsData from '../../hooks/useProductsData'
import Search from '../animations/Floats/Search'

import { StyledSearchInput, StyledSearchResult } from '../../styles/index'

// import { useFilterProducts } from '../../context/filterProductsContext'

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const SearchInput = () => {
  // const { filterState, filterDispatch } = useFilter()
  // const [search, setSearch] = useState('')
  // const { filteredProducts } = useProductsData(filterState, reducerStateActions)
  // useEffect(() => {
  //   if (search === '') {
  //     filterDispatch({
  //       type: 'search',
  //       payload: { title: '' },
  //     })
  //   }
  // }, [search, filterDispatch])
  return (
    <div style={{ position: 'relative' }}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          // filterDispatch({
          //   type: 'search',
          //   payload: { title: search },
          // })
        }}
      >
        <StyledSearchInput>
          <input
            type="text"
            name="search"
            // value={search}
            // onChange={(e) => {
            //   setSearch(e.target.value)
            // }}
          />
          <Search />
        </StyledSearchInput>
      </form>
      {/* <StyledSearchResult>
        {filteredProducts.length !== 0 && search !== '' ? (
          filteredProducts
            ?.filter((item) =>
              item.title.toLowerCase().includes(search.toLowerCase()),
            )
            .map((fil) => (
              <Link to={`/product/${fil._id}`} key={fil._id}>
                <div>{fil.title}</div>
              </Link>
            ))
        ) : filteredProducts.length !== 0 && search === '' ? null : (
          <Link>
            <div>none</div>
          </Link>
        )}
      </StyledSearchResult> */}
    </div>
  )
}
export default SearchInput
