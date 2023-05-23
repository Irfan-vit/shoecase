import Footer from '../../components/footer/Footer'
import NavBar from '../../components/navBar/NavBar'
import Hero from './homeModels/hero/HeroImg'
import Mission from './homeModels/mission/Mission'

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Mission />

      <Footer />
    </>
  )
}

export default Home
