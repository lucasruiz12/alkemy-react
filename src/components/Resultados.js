import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swAlert from '@sweetalert/with-react';

function Resultados(props) {

    const [moviesResults, setMoviesResults] = useState([]);
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword')
    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=e458ae212628ab4e8ff0f3cdc154a112&language=es-ES&query=${keyword}`
    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');
    const url_image = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        if (!token) {
            navigate('/')
        }
        axios.get(endpoint)
            .then(response => {
                const apiData = response.data.results;

                if (apiData.length === 0) {
                    swAlert({
                        title: `Tu búsqueda con la palabra "${keyword}" no arrojó resultados`,
                        icon: "error",
                    });
                }
                setMoviesResults(apiData)
            })
            .catch(error => {
                console.log("No se encuentra la peli")
            })
    }, [keyword])

    console.log(moviesResults)

    return (
        <>
            <div className="row" style={{ marginTop: '30px' }}>
                <h1>Resultados de la palabra clave: "{keyword}"</h1>
                <hr />
                <br />
                {moviesResults.length === 0 && <h2>No hay resultados</h2>}
                {
                    moviesResults.map((el) => {
                        return (
                            <div className="col-4" key={el.id}>
                                <div className="card my-4">
                                    <div className="card-body">
                                        <img src={(url_image + el.poster_path)} className="card-img-top" alt="NOIMG" />
                                        <button className="fav-btn" onClick={props.addOrRemoveFav} data-movie-id={el.id}>♡</button>
                                        <h5 className="card-title">{el.title}</h5>
                                        <Link to={`/detalle?movieId=${el.id}`} className="btn btn-primary">Ver detalle</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Resultados;
