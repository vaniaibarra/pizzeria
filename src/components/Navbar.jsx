import format from "../utils/format";

function Navbar() {
    const total = 25000;
    const token = false;

    return (
      <>   
        <nav className="flex justify-between bg-slate-900 text-white p-2">
            <div className="flex space-x-5">
            
            <p>Pizzería Mamma Mía!</p>
            <button className="border-2 border-white rounded">🍕 Home</button>

            <div>

                {token ? (
                    <div className="flex gap-x-5">
                        <button className="border-2 border-white rounded">🔐 Login</button>
                        <button className="border-2 border-white rounded">🔐 Register</button>
                    </div>
                ) : (
                    <div className="flex gap-x-5">
                        <button className="border-2 border-white rounded">🔓 Profile</button>
                        <button className="border-2 border-white rounded">🔒 Logout</button>
                    </div>
                )
                }
            
            </div>
            </div>

            <div>
            <button className="border-2 border-white rounded">🛒 Total: ${format(total)}</button>
            </div>
        </nav>
      </>
    )
  }
  
  export default Navbar
  