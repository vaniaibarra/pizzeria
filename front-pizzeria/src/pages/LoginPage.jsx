import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { login } = useUser();
    const navigate = useNavigate();

    const validarDatos = async (e) => {
        e.preventDefault();
    
        // Validación de campos antes de intentar login
        if (!email || !password) {
            setMessage('Todos los campos son obligatorios');
            return;
        } else if (password.length < 6) {
            setMessage('La contraseña debe contener al menos 6 caracteres');
            return;
        }
    
        // Intentar login después de validar los campos
        const result = await login(email, password);
    
        if (result.success) {
            setMessage('Inicio de sesión exitoso');
            setEmail('');
            setPassword('');
            navigate('/profile');  // Redirigir solo si el login fue exitoso
        } else {
            setMessage(result.error || 'Error al iniciar sesión');
        }
    }

    return (

        <>
        <form onSubmit={validarDatos} className="space-y-5 p-5">
            <div className="flex flex-col">
                <label>Email</label>
                <input 
                    type="email"
                    name="email"
                    className="border-2 border-black rounded-md w-1/5"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="flex flex-col">
                <label>Contraseña</label>
                <input 
                    type="password"
                    name="password"
                    className="border-2 border-black rounded-md w-1/5"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className="bg-blue-500 text-white rounded-md p-2" type="submit">Ingresar</button>
        </form>
        {message && <p>{message}</p>}
        </>
    )
}

export default LoginPage;