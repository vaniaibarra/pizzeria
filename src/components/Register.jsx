import { useState } from "react";

const Register = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [message, setMessage] = useState('');

const validadDatos = (e) => {
    e.preventDefault();
    if(!email || !password || !confirmPassword){
        setMessage('Todos los campos son obligatorios');
    } else if (password.length < 6){
        setMessage('La contraseña debe contener al menos 6 caracteres');
    } else if (password !== confirmPassword) {
        setMessage('Las contraseñas no coinciden')
    } else {
        setMessage('Registro exitoso')
    }
}

    return (
        <>
            <form onSubmit={validadDatos} className="space-y-5 p-5">
                <div className="form-control flex flex-col">
                    <label>Email</label>
                    <input
                    type="email"
                    name="email"
                    className="form-control border-2 border-black rounded w-1/5"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                     />
                </div>

                <div className="form-control flex flex-col">
                    <label>Contraseña</label>
                    <input 
                    type="password"
                    name="password"
                    className="form-control border-2 border-black rounded w-1/5"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="form-control flex flex-col">
                    <label>Confirmar contraseña</label>
                    <input 
                    type="passworld"
                    name="confirmPassword"
                    className="form-control border-2 border-black rounded w-1/5"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button className="bg-blue-500 text-white  rounded-md p-2" type="submit">Registrar</button>
            </form>
            {message && <p>{message}</p>}
        </>
    )
}

export default Register;
