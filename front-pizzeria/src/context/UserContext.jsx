import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState('');
  console.log(token);

  //metodo register
const register = async (email, password) => {
  try {
    const response = await fetch('http://localhost:5002/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    

    if(response.ok) {
      alert('Registro exitoso')
    } else {
      const error = await response.json()
      alert('Error al registrar', error)
    }

  } catch ( error ) {
    console.log('Error al registrar', error)
  }
}

  //metodo login
const login = async (email, password) => {
  try {
    const response = await fetch('http://localhost:5002/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    const data = await response.json()

    if(response.ok) {
     setToken(data.token)
     setEmail(data.email)
     alert('Login exitoso')
    } else {
      //const error = await response.json()
      return { success: false, error: data.message || 'Error desconocido' };
      alert('Error al ingresar', error)
    }

  } catch ( error ) {
    console.log('Error al ingresar', error)
  }
}

  //metodo payload

  
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

 // const login = (token) => {
  //  setToken(token);
  //};

  const logout = () => {
    setToken(false);  
  };

  return (
    <UserContext.Provider value={{ token, logout, register, login, email }}>
      {children}
    </UserContext.Provider>
  );
};