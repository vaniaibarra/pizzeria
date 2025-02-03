import { Link } from "react-router-dom"
import { useUser } from "../context/UserContext"
import { useEffect } from "react"

const Profile = () => {
const { getProfile, userData, logout } = useUser()

useEffect(() => {
    getProfile()
}, [getProfile])

    return (
        <>
            <div className="flex flex-col p-5 gap-y-5">
                <div>
                <div className="flex">
                <p className="font-semibold">Email:</p>
                <p className="font-thin">{userData.email} </p>
                </div>
                <div className="flex">
                <p className="font-semibold">Teléfono:</p>
                <p className="font-thin">9XXXXXXXX</p>
                </div>
                </div>
                <button 
                onClick={logout}
                className="bg-black text-white text-base rounded p-2 w-32" to="/">Cerrar sesión</button>
            </div>
        </>
    )
}

export default Profile