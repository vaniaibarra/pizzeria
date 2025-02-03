import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || true);

  // método register // operación async devuelve promesa
  const register = async (email, password) => {
    try{
      const response = await fetch('http://localhost:5002/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if(response.ok) {//respuesta 200 - 299, esto devuelve con bool
        alert('Usuario registrado con éxito')
      } else {
        const error = await response.json()
        alert('Error al registrar', error)
        
      }

    } catch (error) {
      console.log("Error al registro", error)
    }
  }
  
  // método login

  const login = async (email, password) => {
    try{
      const response = await fetch('http://localhost:5002/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if(response.ok) {//respuesta 200 - 299, esto devuelve con bool
        alert('Usuario registrado con éxito')
      } else {
        const error = await response.json()
        alert('Error al registrar', error)
        
      }

    } catch (error) {
      console.log("Error al registro", error)
    }
  }

  //método extraer payload del token y mostrar info en el perfil

  
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  //const login = (token) => {
  //  setToken(token);
  //};

  const logout = () => {
    setToken(false);  
  };

  return (
    <UserContext.Provider value={{ token, login, logout, register }}>
      {children}
    </UserContext.Provider>
  );
};
