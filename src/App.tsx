import Header from './components/shared/Header/Header'
import Hero from './features/hero'
import Highlights from './features/highlights'
import About from './features/about'
import PageFrame from './components/layout/PageFrame'
import './App.css'

function App() {
  return (
    <PageFrame>
      <main>
        <Header />
        <Hero />
        <Highlights />
        <About />
      </main>
    </PageFrame>
  )
}

export default App