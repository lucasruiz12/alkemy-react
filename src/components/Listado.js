import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swAlert from '@sweetalert/with-react';

function Listado(props) {
    const navigate = useNavigate();
    const endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=e458ae212628ab4e8ff0f3cdc154a112&language=es-ES&page=1`
    const url_image = 'https://image.tmdb.org/t/p/w500/'
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        const token = sessionStorage.getItem('token')
        if (!token) {
            navigate("/")
        }
        axios.get(endpoint)
            .then(response => {
                const apiData = response.data.results;
                setMoviesList(apiData)
            })
            .catch(error => {
                swAlert({
                    title: "Hubo errores 😓, intentá más tarde",
                    icon: "error",
                });
            })
    }, [setMoviesList])

    return (
        <div className="row" style={{ marginTop: '30px' }}>
            {
                moviesList.map((el) => {
                    return (
                        <div className="col-3" key={el.id}>
                            <div className="card my-4">
                                <div className="card-body">
                                    <img src={(url_image + el.poster_path)} className="card-img-top" alt="NOIMG" />
                                    <button className="fav-btn" onClick={props.addOrRemoveFav} data-movie-id={el.id} >♡</button>
                                    <h5 className="card-title">{el.title.substring(0,20)}...</h5>
                                    <p className="card-text">{el.overview.substring(0, 80)}...</p>
                                    <Link to={`/detalle?movieId=${el.id}`} className="btn btn-primary">Ver detalle</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Listado;