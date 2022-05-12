import Login from './components/Login'
import Listado from './components/Listado';
import NotFound from './components/NotFound';
import Contacto from './components/Contacto';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/bootstrap.min.css'

function App() {
  return (
    <>
      <div className='container' name='app'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/listado' element={<Listado />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;