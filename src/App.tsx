import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/shared/Header/Header'
import Hero from './features/hero'
import Highlights from './features/highlights'
import About from './features/about'
import Wellness from './features/wellness'
import Apartment from './features/apartment'
import Location from './features/location'
import Reviews from './features/reviews'
import Footer from './features/footer'
import PageFrame from './components/layout/PageFrame'
import AvailabilityPage from './features/availability/Availability'
import './App.css'

function HomePage() {
  return (
    <PageFrame>
      <main>
        <Header />
        <Hero />
        <Highlights />
        <About />
        <Wellness />
        <Apartment />
        <Location />
        <Reviews />
        <Footer />
      </main>
    </PageFrame>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/availability" element={<AvailabilityPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App