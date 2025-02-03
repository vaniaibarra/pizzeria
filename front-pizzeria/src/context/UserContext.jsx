import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token') || null);
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState({})
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
     localStorage.setItem('token', data.token)
     alert('Login exitoso')
    } else {
      const error = await response.json()
      return { success: false, error: data.message || 'Error desconocido' };
      alert('Error al ingresar', error)
    }

  } catch ( error ) {
    console.log('Error al ingresar', error)
  }
}

  //METODO PAYLOAD

  const getProfile = async () => {
    try {
      const response = await fetch('http://localhost:5002/api/auth/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
    
      })
  
      if(response.ok) {
       const data = await response.json()
        setUserData(data)
      } else {
        const error = await response.json()

        alert('Error al ingresar', error)
      }
  
    } catch ( error ) {
      console.log('Error', error)
    }
  }



  
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
    setToken(null);  
    localStorage.removeItem
    setEmail('');
  };

  return (
    <UserContext.Provider value={{ token, logout, register, login, email, getProfile, userData }}>
      {children}
    </UserContext.Provider>
  );
};