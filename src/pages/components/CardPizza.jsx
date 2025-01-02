import format from "../../utils/format"
function CardPizza ({name, price, ingredients, img})  {
    return(
        <>
            <div className="flex space-x-5">
                <div>
                    <img src={img} className="rounded-t" />
                    <div className="border-2 border-gray-400 rounded-b">
                        <div className="border-b-2 border-gray-400 text-lg font-medium p-3" >
                            <p>Pizza {name}</p>
                        </div>
                        <div className="border-b-2 border-gray-400 p-3 text-center">
                            <p className="text-center text-xl font-thin">Ingredientes:</p>
                            <p className="font-extralight text-sm"> 🍕 {ingredients} </p>
                        </div>
                        
                        <div className="flex-col p-3">
                            <div>
                                <p className="text-xl font-semibold text-center"> Precio: ${format(price)} </p>
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