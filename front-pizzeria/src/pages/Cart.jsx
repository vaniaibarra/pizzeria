import { pizzaCart } from "../data/pizzas";
import { useState } from "react";
import format from "../utils/format";

const Cart = () => {


const [cart, setCart] = useState(pizzaCart);
const handleIncrease = (id) => {
    const newCart = [...cart];
    const itemIndex = newCart.findIndex((item) => item.id === id);
    newCart[itemIndex].count += 1;
    setCart(newCart);
};

const handleDecrease = (id) => {
    const newCart = [...cart];
    const itemIndex = newCart.findIndex((item) => item.id === id);
    if (newCart[itemIndex].count > 1) {
        newCart[itemIndex].count -= 1;
    } else {
        newCart.splice(itemIndex, 1); 
    }
    setCart(newCart);
};

const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

const handlePay = () => {
    alert("Funcionalidad de pago aún no implementada");
};

    return (
        <>
            <div className="p-5">
                <h1 className="text-2xl font-mono">Carrito de compras</h1>
                <div className>
                    {cart.map((item) => (
                        <div className="flex space-x-6 mb-4 p-4" key={item.id}>
                            <img 
                            src={item.img}
                            alt={item.name}
                            className="w-1/6"
                            />
                            <div className="flex flex-col justify-center">
                                <h2 className="font-semibold">{item.name}</h2>
                                <p>${format(item.price)}</p>
                                <div>
                                <p className="font-thin">Cantidad:
                                    <button onClick={() => handleIncrease(item.id)}
                                        className="px-2 border-2 border-stone-300 bg-blue-400 text-white"
                                    >+</button>
                                     {item.count}
                                     <button onClick={() => handleDecrease(item.id)}
                                        className="px-2 border-2 border-stone-300 bg-red-400 text-white"
                                    >-</button></p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <p>Total: ${format(total)}</p>
                    <button className="bg-black text-white rounded-md p-2">Pagar</button>
                </div>
            </div>
        </>
    )
}

export default Cart;