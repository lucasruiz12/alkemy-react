import swAlert from '@sweetalert/with-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Buscador() {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim()
        if (keyword.length === 0) {
            swAlert({
                title: "No podés buscar algo vacío!",
                text: 'Escribí algo más, por favor.',
                icon: "warning",
            });
        }
        e.currentTarget.keyword.value = ''
        navigate(`/resultados?keyword=${keyword}`)

    }

    return (
        <form onSubmit={handleSubmit}>
            <label className="form-label mb-0 mx-2">
                <input type="text" className="form-control" aria-describedby="emailHelp" name='keyword' placeholder="Buscá tu película..." />
            </label>
            <button type="submit" className="btn btn-outline-primary">Buscar</button>
        </form>
    )
}

export default Buscador;