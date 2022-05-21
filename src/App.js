import Login from './components/Login'
import Listado from './components/Listado';
import NotFound from './components/NotFound';
import Contacto from './components/Contacto';
import Header from './components/Header';
import Footer from './components/Footer';
import Detalle from './components/Detalle';
import Resultados from './components/Resultados';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/bootstrap.min.css'
import './css/App.css'

function App() {

  const favMovies = localStorage.getItem('favs')

  let tempFavs = [];

  if (favMovies === null) {
    tempFavs = []
  } else {
    tempFavs = JSON.parse(favMovies)
  }

  const addOrRemoveFav = (e) => {
    const btn = e.currentTarget.parentElement;
    const imgURL = btn.querySelector('img').getAttribute('src')
    const title = btn.querySelector('h5').innerText;
    const overview = btn.querySelector('p').innerText;

    const movieData = {
      imgURL,
      title,
      overview,
      id: e.currentTarget.dataset.movieId
    }
    /* console.log(tempFavs)
    tempFavs.push(movieData) */
    localStorage.setItem('favs', JSON.stringify(movieData))
  }

  return (
    <>
      <div className='container' name='app'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/listado' element={<Listado addOrRemoveFav={addOrRemoveFav} />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/detalle/' element={<Detalle />} />
            <Route path='/resultados/' element={<Resultados addOrRemoveFav={addOrRemoveFav} />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;