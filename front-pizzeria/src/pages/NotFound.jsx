import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <>
        <div className="h-screen grid place-items-center">
            <p className="text-4xl">Ups! Lo sentimos, pero el enlace que seleccionaste no existe :/</p>
            <Link className="bg-black text-white p-2 text-center text-base w-1/5 rounded-md" to="/">Volver al inicio</Link>
        </div>
        </>
    )
}

export default NotFound;