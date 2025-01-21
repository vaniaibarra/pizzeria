import Header from "./components/Header"
import CardPizza from "./components/CardPizza"
import { pizzas } from "../data/pizzas"
import { useState, useEffect } from "react"


function Home() {
const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5002/api/pizzas')
    .then((res) => res.json())
    .then((data) => {
      setPizzas(data);
      console.log(data)
    }) 
  }, [])

    return (
      <>      
        <Header/>

      <div>
        <div className="bg-orange-400 text-white">
          <h1 className="font-mono text-2xl text-center p-3">Menú de pizzas</h1>
        </div>
        <div className="grid grid-cols-3 gap-y-5 gap-x-5 p-7">
          {pizzas.map((pizza) => (
            <CardPizza
            key={pizza.id}
            pizza={pizza}
            
            />
          ))}
        </div>
      </div>
      </>
    )
  }
  
  export default Home
  