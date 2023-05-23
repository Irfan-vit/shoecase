import Footer from '../../components/footer/Footer'
import NavBar from '../../components/navBar/NavBar'
import Categories from './homeModels/categories/Categories'
import Featured from './homeModels/featured/Featured'
import Hero from './homeModels/hero/HeroImg'
import Mission from './homeModels/mission/Mission'

const Home = () => {
  return (
    <>
      <NavBar />
      <Mission />
      <Hero />
      <Featured />
      <Categories
      <Footer />
    </>
  )
}

export default Home
