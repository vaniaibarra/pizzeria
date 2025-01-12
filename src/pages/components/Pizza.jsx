import React, { useEffect, useState } from 'react';
import format from '../../utils/format';
const Pizza = () => {
  const [pizza, setPizza] = useState("");
  

  useEffect(() => {
    
    fetch('http://localhost:5002/api/pizzas/p001')
      .then((response) => response.json())
      .then((data) => {
        setPizza(data); 
        
      })
      
  }, []);
  if (!pizza) {
    return <p>Loading...</p>;
  }

  return (
    <>
    
    <div className="bg-orange-400 text-white">
      <h1 className="font-mono text-2xl text-center p-3">Menú de pizzas</h1>
    </div>
    <div className="flex w-1/5">
                <div>
                    <img 
                    src={pizza.img} 
                    className="rounded-t" />
                    <div className="border-2 border-gray-400 rounded-b">
                        <div className="border-b-2 border-gray-400 text-lg font-medium p-3 text-center" >
                            <p>Pizza {pizza.name}</p>
                        </div>
                        <div className="border-b-2 border-gray-400 p-3 text-center">
                            <p className="text-center text-xl font-thin">Ingredientes:</p>
                            <p>{pizza.ingredients.join(", ")}</p>
                            <hr/>
                            <p className="font-extralight text-sm">{pizza.desc}</p>
                        </div>
                        
                        <div className="flex-col p-3">
                            <div>
                                <p className="text-xl font-semibold text-center"> Precio: ${format(pizza.price)} </p>
                            </div>
                            <div className="flex justify-between p-4">
                                <button className="border-gray-400 border-2 rounded p-1">Ver más</button>
                                <button className="bg-black text-white rounded p-1">🛒 Añadir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  );
};


export default Pizza;