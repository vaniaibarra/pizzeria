import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './components/Register'
import LoginPage from './components/LoginPage'

function App() {

  return (
    <>      
      <Navbar/>
      { /* <Home/> */}
      { /* <Register /> */}
      <LoginPage />
      <Footer/>
    </>
  )
}

export default App
