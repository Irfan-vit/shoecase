import { useState } from 'react'
import { Link } from 'react-router-dom'
import useProductsSearch from '../../hooks/useProductsSearch'
import HeroLogo from '../animations/HeroAnimations/HeroLogo'
import SearchNav from '../animations/Loaders/NavSearch'
import {
  MdOutlineShoppingCart,
  MdFavoriteBorder,
  MdOutlineAccountCircle,
  MdSearch,
} from 'react-icons/md'
import {
  StyledNavList,
  StyledNavTitle,
  StyledNav,
  StyledNavBarWrapper,
  StyledSearchResult,
  StyledSearchCard,
  StyledSearchCardWrapper,
} from '../../styles/index'

const Nav = () => {
  const [search, setSearch] = useState('')
  const { searchQuery } = useProductsSearch(search)
  return (
    <StyledNav>
      <StyledNavBarWrapper>
        <StyledNavTitle>
          Shoe
          <Link to="/">
            <HeroLogo />
          </Link>
          Case
        </StyledNavTitle>
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
            <span>
              <MdSearch />
            </span>
          </form>
          <StyledSearchResult>
            <StyledSearchCardWrapper>
              {search === '' ? null : searchQuery.isLoading ||
                searchQuery.isFetching ? (
                <SearchNav />
              ) : !searchQuery?.data.length ? (
                <h4>No Products Found</h4>
              ) : (
                searchQuery?.data?.map((fil) => (
                  <StyledSearchCard>
                    <Link to={`/product/${fil._id}`} key={fil._id}>
                      <div>
                        <img src={fil.imgSrc} alt="" />
                      </div>
                      <p>{fil.price}</p>
                      <p>{fil.title}</p>
                    </Link>
                  </StyledSearchCard>
                ))
              )}
            </StyledSearchCardWrapper>
          </StyledSearchResult>
        </div>
        <StyledNavList>
          <ul>
            <li>
              <Link to="/cart">
                <MdOutlineShoppingCart />
                <p>cart</p>
              </Link>
            </li>
            <li>
              <Link to="/wishlist">
                <MdFavoriteBorder />
                <p>wishlist</p>
              </Link>
            </li>
            <li>
              <Link to="/user">
                <MdOutlineAccountCircle />
                <p>Account</p>
              </Link>
            </li>
          </ul>
        </StyledNavList>
      </StyledNavBarWrapper>
    </StyledNav>
  )
}
export default Nav
