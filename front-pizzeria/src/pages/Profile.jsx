import { Link } from "react-router-dom"
const Profile = () => {
    return (
        <>
            <div className="flex flex-col p-5 gap-y-5">
                <div>
                <div className="flex">
                <p className="font-semibold">Email:</p>
                <p className="font-thin">vania.ibarraf@gmail.com</p>
                </div>
                <div className="flex">
                <p className="font-semibold">Teléfono:</p>
                <p className="font-thin">9XXXXXXXX</p>
                </div>
                </div>
                <Link className="bg-black text-white text-base rounded p-2 w-32" to="/">Cerrar sesión</Link>
            </div>
        </>
    )
}

export default Profile