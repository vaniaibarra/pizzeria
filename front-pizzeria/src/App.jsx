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
import AppRoutes from './routes/AppRoutes'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoutes from './routes/ProtectedRoutes'
import { useUser } from './context/UserContext'

function App() {

  const {token} = useUser();

  return (
    <>      
    
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
    <div className='flex flex-col flex-grow'>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pizza/:id' element={<Pizza/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/register' element={token ? <Navigate to="/" /> : <Register />}/>
        <Route path='/login' element={token ? <Navigate to="/" /> : <LoginPage />}/>
        <Route 
          path='/profile' 
          element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          } 
        />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </div>

      <Footer/>
      </div>
      
    </>
  )
}

export default App
