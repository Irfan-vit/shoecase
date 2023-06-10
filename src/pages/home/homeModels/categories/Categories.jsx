import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCategories } from '../../../../rtk/productsSlice'
import useCategoriesData from '../../../../hooks/useCategoriesData'
import CategoryTitle from '../../../../components/headings/CategoryTitle'
import CategoryPoster from '../../../../components/poster/CategoryPoster'
import { StyledCategoryCardWrapper } from '../../../../styles/index'

const Categories = () => {
  const dispatch = useDispatch()
  const productsState = useSelector((state) => state.productsReducer)
  const categoriesQuery = useCategoriesData()
  return (
    <>
      <CategoryTitle heading="Shop By Collection" />
      <CategoryPoster />
      <StyledCategoryCardWrapper>
        {categoriesQuery?.data?.map((category) => (
          <div
            key={category._id}
            onClick={() =>
              productsState.categories.includes(category.categoryName)
                ? null
                : dispatch(toggleCategories(`${category.categoryName}`))
            }
          >
            <img src={category.imgSrc} alt="" />

            <div>
              <Link to={`product`}>
                <span>{category.categoryName.toUpperCase()}</span>
              </Link>
            </div>
          </div>
        ))}
      </StyledCategoryCardWrapper>
    </>
  )
}

export default Categories
