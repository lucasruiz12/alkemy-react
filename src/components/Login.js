import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../css/bootstrap.min.css'

function Login() {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // RegEx para que se haga el formato mail
        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        // Validación del formulario
        if (!email || !password) {
            swAlert({
                title: "Los campos no pueden estar vacíos",
                text: 'Llenalos a todos, dale!',
                icon: "warning",
            });
            return;
        }

        if (email && !regexEmail.test(email)) {
            swAlert({
                title: "Error en el correo",
                text: 'Ingresá un formato válido',
                icon: "warning",
            });
            return;
        }

        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            swAlert({
                title: "Credenciales inválidas",
                icon: "error",
            });
            return;
        }

        axios.post('http://challenge-react.alkemy.org/', { email, password })
            .then(res => {
                swAlert({
                    title: "Data enviada!",
                    text: "Click en OK para ingresar",
                    icon: "success",
                });
                const token = res.data.token;
                // Uso el Local Storage. 
                // SetItem recibe nombre de la propiedad y valor
                localStorage.setItem('token', token);
                navigate('/listado')
            })

    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Correo</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" name='email' />
                        <div id="emailHelp" className="form-text">No compartiremos tu correo con nadie</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label" >Contraseña</label>
                        <input type="password" className="form-control" name='password' />
                    </div>
                    <button type="submit" className="btn btn-primary">Ingresar</button>
                </form>
                <br />
                <button onClick={() => localStorage.clear()} className="btn btn-primary">BORRAR TOKEN</button>
            </div>
        </>
    )
}

export default Login;