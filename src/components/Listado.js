import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Listado() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate("/")
        }
    }, [])

    return (
        <>
            <h2>Soy el componente LISTADO</h2>
        </>
    )
}

export default Listado;