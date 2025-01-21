import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Register from './pages/Register'
import LoginPage from './pages/LoginPage'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>      
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
    <div className='flex flex-col flex-grow'>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pizza/p001' element={<Pizza/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/profile' element={<Profile/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </div>

      <Footer/>
      </div>
    </>
  )
}

export default App
