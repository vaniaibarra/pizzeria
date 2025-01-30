import { useState } from "react";
import { CartContext } from "./CartContext";


const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    
    const total = cart.reduce((acc, item) => {
        const price = item.price || 0;
        const count = item.count || 0;
        return acc + price * count;
    }, 0);

    

    const handleIncrease = (id) => {
        setCart((prevCart) => {
            return prevCart.map((item) =>
                item.id === id ? { ...item, count: item.count + 1 } : item
            );
        });
    };

    
    const handleDecrease = (id) => {
        setCart((prevCart) => {
            return prevCart
                .map((item) =>
                    item.id === id ? { ...item, count: item.count - 1 } : item
                )
                .filter((item) => item.count > 0);
        });
    };

    
    const addPizza = (pizza) => {
        setCart((prevCart) => {
            const itemIndex = prevCart.findIndex((item) => item.id === pizza.id);

            if (itemIndex !== -1) {
                
                return prevCart.map((item, index) =>
                    index === itemIndex ? { ...item, count: item.count + 1 } : item
                );
            } else {
                
                return [...prevCart, { ...pizza, count: 1 }];
            }
        });
    };
    

    return(

    <CartContext.Provider value={{cart, setCart, total, handleIncrease, handleDecrease, addPizza}}>
        {children}
    </CartContext.Provider>
    )
}

export default CartProvider;