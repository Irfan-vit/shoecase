import { Link } from 'react-router-dom'
import useCategoriesData from '../../../../hooks/useCategoriesData'
import { StyledCategoryCardWrapper } from '../../../../styles/index'
import CategoryTitle from '../../../../components/headings/CategoryTitle'
import CategoryPoster from '../../../../components/poster/CategoryPoster'

const Categories = () => {
  const categoriesQuery = useCategoriesData()
  return (
    <>
      <CategoryTitle heading="Shop By Collection" />
      <CategoryPoster />
      <StyledCategoryCardWrapper>
        {categoriesQuery?.data?.map((category) => (
          <div key={category._id}>
            <img src={category.imgSrc} alt="" />

            <div>
              <Link>
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
