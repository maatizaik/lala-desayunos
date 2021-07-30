import React from 'react';

function NavBar() {
    return (
      <div>
        <nav classname="navbar navbar-expand-lg navbar-light bg-light">
          <div classname="container-fluid">
            <a classname="navbar-brand" href="#Logo">Lalá Desayunos</a>
            <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span classname="navbar-toggler-icon"></span>
            </button>
            <div classname="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div classname="navbar-nav">
                  <a classname="nav-link active" aria-current="page" href="#">Inicio</a>
                  <a classname="nav-link" href="#">Productos</a>
                  <a classname="nav-link" href="#">Tienda</a>
              </div>
            </div>
        </div>
        </nav>
      </div>)
}
export default NavBar;