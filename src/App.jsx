
import './App.css'
import { Route, Routes } from "react-router";
import Menu from '../src/pages/Menu';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Reviews from './pages/Reviews';

function App() {

  return (
    <>
    <div className="min-h-screen flex flex-col">
      
    <Navbar/>
    <main className="flex-1">

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/menu' element={<Menu/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/reviews' element={<Reviews/>} />
    </Routes>
    </main>
    <Footer/>
    </div>
    </>
  )
}

export default App
