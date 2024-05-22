import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Nav from '../src/components/Nav/Nav'
import Home from './pages/Home'
import Contact from './pages/Contact'
import SpaceGame from './pages/SpaceGame'
import Restaurant from './pages/Restaurant'
import Pizza from './pages/Pizza'
import Editor from './pages/Editor'
import FirstCv from './pages/FirstCv'
import Ineed from './pages/Ineed'



function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/SpaceGame' element={<SpaceGame />} />
          <Route path='/Ineed' element={<Ineed />} />
          <Route path='/Editor' element={<Editor />} />
          <Route path='/FirstCv' element={<FirstCv />} />
          <Route path='/Pizza' element={<Pizza />} />
          <Route path='/Restaurant' element={<Restaurant />} />

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
