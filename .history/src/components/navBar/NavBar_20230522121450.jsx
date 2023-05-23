import { useNavigate } from 'react-router-dom'
import { redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { StyledNavWrapper, StyledNav, StyledNavList } from '../../styles/index'
import { FaShoppingCart, FaHeart, FaUserAlt } from 'react-icons/fa'
import HeroLogo from '../animations/HeroAnimations/HeroLogo'

import SearchInput from '../inputs/SeacrhInput'
import Select from '../select/Select'
// import { useFilterProducts } from '../../context/filterProductsContext'

const NavBar = () => {
  // const { filterDispatch, filterState } = useFilterProducts()
  const navigate = useNavigate()
  return (
    <StyledNavWrapper>
      <StyledNav>
        <div>
          <div>
            <Link to="/">
              <HeroLogo />
            </Link>
          </div>
          <div>
            <Select />
          </div>
        </div>
        <div>
          <div>
            <h1
              style={{
                fontFamily: `var(--font-family-title)`,
                fontSize: `6rem`,
                fontWeight: `var(--font-weight-bold)`,
                color: `var(--primary-light)`,
                textAlign: 'center',
              }}
            >
              Shoe-Case
            </h1>
          </div>
          <div>
            <StyledNavList>
              <ul>
                <li>
                  <Link to="/cart">
                    <FaShoppingCart />
                    <p>cart</p>
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist">
                    <FaHeart />
                    <p>wishlist</p>
                  </Link>
                </li>
                <li>
                  <Link to="/user">
                    <FaUserAlt />
                    <p>Account</p>
                  </Link>
                </li>
              </ul>
            </StyledNavList>
          </div>
        </div>
      </StyledNav>
    </StyledNavWrapper>
  )
}

export default NavBar
