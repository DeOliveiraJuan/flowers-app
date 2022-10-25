import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand" href="*">
            <img className="m-1" src="https://www.svgrepo.com/show/166540/flowers.svg" width="30" height="30" alt="logo-solo"></img>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div className="navbar-nav font-weight-bold text-white">
                    <a className="nav-item nav-link" href="*">Entregas 2h</a>
                    <a className="nav-item nav-link" href="*">Ramos</a>
                    <a className="nav-item nav-link" href="*">Plantas</a>
                    <a className="nav-item nav-link" href="*">Suscripción</a>
                </div>
        </div>
    <Link to="/signup"><button class="btn btn-outline-light mr-2" type="submit">Registrarse</button></Link>
    <Link to="/login"><button  class="btn btn-outline-light" type="submit">Login</button></Link>
    </nav>
    )
}

export default NavBar;