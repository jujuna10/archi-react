import Header from './components/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import Project from './components/Project.jsx';
import HeroSection from './components/HeroSection.jsx';
import ProjectInMainPage from './components/ProjectInMainPage.jsx';
import Payment from './components/Payment.jsx';
import ReviwesProvider from './components/context/ReviewsData.jsx';
import Reviews from './components/Reviews.jsx';
import About from './components/About.jsx';
import ArchiCard from './components/ArchiCard.jsx';
import Reservation from './components/Reservation.jsx';
import Footer from './components/Footer.jsx';
import InputsProvider from './components/context/InputData.jsx';
import AboutPage from './components/AboutPage.jsx';
import Gallery from './components/Gallery.jsx';
import Partners from './components/Partners.jsx';
import Social from './components/Social.jsx';
import Contact from './components/Contact.jsx';
import Materials from './components/Materials.jsx';

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/' && (
        <div className='flex flex-col gap-[20px]'>
          <Header />
          <HeroSection />
          <ProjectInMainPage />
          <Payment />
          <ReviwesProvider>
            <Reviews />
          </ReviwesProvider>
          <About />
          <ArchiCard />
          <InputsProvider>
            <Reservation />
          </InputsProvider>
          <Footer />
        </div>
      )}

      <Routes>
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<> <Header /> <AboutPage /> <About /> <Gallery /> <Footer /> </>} />
        <Route path="/partners" element={<> <Header /> <Partners /> <Footer /> </>} />
        <Route path="/social" element={<> <Header /> <Social /> <Footer /> </>} />
        <Route path="/contact" element={<> <Header /> <Contact /> <InputsProvider>
            <Reservation />
          </InputsProvider> <Footer /> </>} />
        <Route path="/materials" element={<> <Header /> <Materials /> <Footer /> </>} />



      </Routes>
    </div>
  );
}

export default App;
