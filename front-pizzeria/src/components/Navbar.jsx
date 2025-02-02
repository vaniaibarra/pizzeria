import format from "../utils/format";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { useUser } from "../context/UserContext";


function Navbar() {
    const {total} = useContext(CartContext);
    const {token, logout} = useUser();

    return (
      <>   
        <nav className="flex justify-between bg-slate-900 text-white p-2">
            <div className="flex space-x-5">
            
            <p>Pizzería Mamma Mía!</p>
            <Link to="/" className="border-2 border-white rounded">🍕 Home</Link>

            <div>

                {token ? (
                    
                    <div className="flex gap-x-5">
                        <Link to="/profile" className="border-2 border-white rounded">🔓 Profile</Link>
                        <button 
                            onClick={logout} 
                            className="border-2 border-white rounded bg-red-500 px-2">
                            🔒 Logout
                        </button>
                    </div>
                ) : (
                    
                    <div className="flex gap-x-5">
                        <Link to="/login" className="border-2 border-white rounded">🔐 Login</Link>
                        <Link to="/register" className="border-2 border-white rounded">🔐 Register</Link>
                    </div>
                )
                }
            
            </div>
            </div>

            <div>
            <Link to="/cart" className="border-2 border-white rounded">🛒 Total: ${format(total)}</Link>
            </div>
        </nav>
      </>
    )
  }
  
  export default Navbar
  