import useCategoriesData from '../../hooks/useCategoriesData'
import useProductsData from '../../hooks/useProductsData'
import HomeLoader from '../../components/animations/Loaders/HomeLoader'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/navBar/Nav'
import Categories from './homeModels/categories/Categories'
import Featured from './homeModels/featured/Featured'
import Hero from './homeModels/hero/HeroImg'
import Mission from './homeModels/mission/Mission'

const Home = () => {
  const categoriesQuery = useCategoriesData()
  const { productsQuery } = useProductsData()
  if (categoriesQuery.isLoading || productsQuery.isLoading)
    return (
      <div>
        <HomeLoader />
      </div>
    )
  if (categoriesQuery.isSuccess && productsQuery.isSuccess)
    return (
      <>
        <Nav />
        <Hero />
        <Mission />
        <Featured />
        <Categories />
        <Footer />
      </>
    )
}

export default Home
