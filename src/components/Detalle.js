import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Detalle() {

    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');
    let query = new URLSearchParams(window.location.search);
    let movieId = query.get('movieId')
    const endpoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=e458ae212628ab4e8ff0f3cdc154a112&language=es-ES`
    const url_image = 'https://image.tmdb.org/t/p/w500/'
    const [movieDetail, setMovieDetail] = useState(null)

    useEffect(() => {
        if (!token) {
            navigate('/')
        }
        axios.get(endpoint)
            .then(response => {
                const apiData = response.data;
                setMovieDetail(apiData)
            })
            .catch(error => {
                console.log("No se encuentra la peli")
            })
    }, [movieId])

    return (
        <>
            { !movieDetail && <p>Cargando... No seas impaciente (o quizás la peli no existe)</p>}
            { movieDetail &&
                <div className="card mb-3" style={{ maxWidth: '1080px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={url_image + movieDetail.poster_path} className="img-fluid rounded-start" alt="NOIMG" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">{movieDetail.title}</h2>
                                <hr />
                                <h5 className="card-text">Sinopsis: {movieDetail.overview}</h5>
                                <br />
                                <p className="card-text">Eslogan: {movieDetail.tagline}</p>
                                <br />
                                <p className="card-text">Popularidad: {movieDetail.popularity}</p>
                                <br />
                                <p className="card-text">Puntuación promedio: {movieDetail.vote_average}</p>
                                <br />
                                <p className="card-text">Cantidad de puntuaciones: {movieDetail.vote_count}</p>
                                <br />
                                <p className="card-text"><small className="text-muted">Fecha de lanzamiento: {movieDetail.release_date} </small></p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Detalle;