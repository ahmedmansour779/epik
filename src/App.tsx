import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import FeaturedProducts from './components/FeaturedProducts'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import OurService from './components/OurService'
import OurValuablePartners from './components/OurValuablePartners'
import './style/App.css'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <OurService />
      <OurValuablePartners />
      <FeaturedProducts />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
