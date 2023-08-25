import React from 'react';

const Cabecalho = () => {
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid d-flex justify-content-center">
        <a className="navbar-brand" href="#">
          <header>
            <h1>TaskMaster</h1>
          </header>
        </a>
      </div>
    </nav>
  );
};

export default Cabecalho;
