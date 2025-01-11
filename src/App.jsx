import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cart from './pages/Cart'
// import Register from './components/Register'
// import LoginPage from './components/LoginPage'

function App() {

  return (
    <>      
      <Navbar/>
      
      {/*<Home/>*/ }
      <Cart/>
      { /* <Register /> */}
      {/*<LoginPage />*/}
      <Footer/>
    </>
  )
}

export default App
