import { BrowserRouter } from 'react-router-dom';

import { About, Links,
Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter basename='https://coffeeprynce.github.io/3d-portfolio/'>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover
      bg-no-repeat bg-center'>
     <Navbar />
     <Hero />
      </div>
      <About />
      {/* <Experience /> */}
      <StarsCanvas />
      <Tech /> 
      <Works />
      
      <div className='relative z-0'>
        {/* <Contact /> */}
        <Links />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
