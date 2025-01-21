import { useState } from "react";

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const validarDatos = (e) => {
        e.preventDefault();

        if(!email || !password){
            setMessage('Todos los campos son obligatorios')
        }else if(password < 6) {
            setMessage('La constraseña debe contener más de 6 caracteres')
        } else {
            setMessage('Inicio de sesión exitoso')
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
                    value={email}
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