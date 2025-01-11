import format from "../../utils/format"
function CardPizza ({pizza})  {
    return(
        <>
            <div className="flex space-x-5">
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
                            <p className="font-extralight text-sm"> 
                            <ul>
                                {pizza.ingredients.map((ingredient, id) => (
                                    <li key={id}>🍕 {ingredient}</li>
                                ))}
                                </ul>
                             </p>
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
    )
}

export default CardPizza