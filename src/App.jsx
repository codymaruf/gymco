import Hero from './Sections/Hero'
import About from './Sections/About'
import Programms from './Sections/Programms'
import Timing from './Sections/Timing'
import Testimonial from './Sections/Testimonial'
import Location from './Sections/Location'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'
import Nav from './Sections/Nav'


const App = () => {
  return (
    <section className='font-inter'>
      <Nav />
      <Hero />
      <About />
      <Programms />
      <Timing />
      <Testimonial  />
      <Location />
      <Contact />
      <Footer />
    </section>
  )
}

export default App