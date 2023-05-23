import Search from '../animations/Floats/Search'

import { StyledSearchInput } from '../../styles'
import { useFilterProducts } from '../../context/filterProductsContext'
const SearchInput = () => {
  const { search, setSearch } = useFilterProducts()
  return (
    <form action="">
      <StyledSearchInput>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search />
      </StyledSearchInput>
    </form>
  )
}
export default SearchInput
