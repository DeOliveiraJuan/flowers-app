import { Link } from 'react-router-dom';
import './Navbar.css'

function NavBar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
            <img className="ml-4" src="https://www.svgrepo.com/show/166540/flowers.svg" width="30" height="30" alt="logo-solo"></img>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
                <div className="navbar-nav font-weight-bold">
                    <a className="nav-item nav-link" href="*">Entregas hoy</a>
                    <a className="nav-item nav-link" href="*">Ramos</a>
                    <a className="nav-item nav-link" href="*">Plantas</a>
                    <a className="nav-item nav-link" href="*">Eventos</a>
                    <a className="nav-item nav-link" href="*">Suscripción</a>
                </div>
        </div>
        <div class="btn-group">
              <button type="button" class="btn btn-outline-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg>
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <Link to='/login' className='text-decoration-none'><a className="dropdown-item" href="*">Inicia sesión</a></Link>
                <Link to='/signup' className='text-decoration-none'><a className="dropdown-item" href="*">Registrate</a></Link>
              </div>
            </div>
    </nav>
    )
}



export default NavBar;