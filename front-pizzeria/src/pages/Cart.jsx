import { useState, useEffect } from "react";
import { useContext } from "react";
import { useUser } from "../context/UserContext";
import { CartContext } from "../context/CartContext";
import format from "../utils/format";

const Cart = () => {
    const { token } = useUser();
    const { cart, setCart, handleIncrease, handleDecrease, total, message, handleCheckout, addToCart, removeFromCart } = useContext(CartContext);
    const [paymentStatus, setPaymentStatus] = useState("");

    useEffect(() => {
        // Cuando el mensaje de éxito/error cambie, actualizar el estado de pago
        if (message) {
            setPaymentStatus(message);
        }
    }, [message]);

    // Función para manejar el pago
    const handlePay = async () => {
        // Verificar si el carrito está vacío
        if (cart.length === 0) {
            setPaymentStatus("El carrito está vacío.");
            return;
        }

        setPaymentStatus("Procesando pago...");

        // Aquí llamamos a handleCheckout desde el CartContext para realizar la compra
        await handleCheckout();
    };

    return (
        <>
            <div className="p-5">
                <h1 className="text-2xl font-mono mb-4">Carrito de compras</h1>
                <div>
                    {cart.length === 0 ? (
                        <p>No tienes productos en tu carrito.</p>
                    ) : (
                        <div>
                            {cart.map((item) => (
                                <div className="flex space-x-6 mb-4 p-4 border-b-2" key={item.id}>
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
                                                    className="px-2 border-2 border-stone-300 bg-blue-400 text-white rounded"
                                                >+</button>
                                                 {item.count}
                                                 <button onClick={() => handleDecrease(item.id)}
                                                    className="px-2 border-2 border-stone-300 bg-red-400 text-white rounded"
                                                >-</button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="flex justify-between items-center">
                                <p className="font-semibold text-lg">Total: ${format(total)}</p>
                                <button 
                                    onClick={handlePay}
                                    disabled={!token}
                                    className="bg-black text-white rounded-md p-2 disabled:bg-gray-400"
                                >
                                    Pagar
                                </button>
                            </div>
                        </div>
                    )}
                    {/* Mostrar mensaje de éxito o error */}
                    {paymentStatus && <p className="mt-4 text-center text-lg text-green-500">{paymentStatus}</p>}
                </div>
            </div>
        </>
    );
};

export default Cart;
