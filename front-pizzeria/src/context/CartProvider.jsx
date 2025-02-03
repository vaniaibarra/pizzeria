import { useState } from "react";
import { CartContext } from "./CartContext";
import { useEffect } from "react";


const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const [message, setMessage] = useState('');

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:5002/api/auth/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage('Compra realizada con éxito');
        localStorage.removeItem('cart');
        setCart([]);
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message}`);
      }
    } catch (error) {
      setMessage('Hubo un error al procesar tu compra');
    }
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

    
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

    <CartContext.Provider value={{cart, setCart, total, handleIncrease, handleDecrease, addPizza, message, handleCheckout, addToCart, removeFromCart}}>
        {children}
    </CartContext.Provider>
    )
}

export default CartProvider;