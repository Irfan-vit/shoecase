import Footer from '../../components/footer/Footer'
import NavBar from '../../components/navBar/NavBar'
import Hero from './homeModels/hero/HeroImg'
import Mission from './homeModels/mission/Mission'

const Home = () => {
  return (
    <div style={{ MaxWidth: '1200px' }}>
      <NavBar />
      <Mission />
      <Hero />
      <Footer />
    </div>
  )
}

export default Home
