
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'

function App() {

  return (
    <div className='bg-[#32353c] min-h-[100vh] scrollbar-thin   w-full'>
     <Home/>
     <About/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
