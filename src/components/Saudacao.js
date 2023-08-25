import React from 'react';

const Saudacao = ({ username, onLogout }) => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light mb-3">
      <div className="container-fluid d-flex justify-content-center">
        <span className="navbar-text mr-3">Olá, {username}! Seja bem-vindo ao TaskMaster!</span>
        <button className="btn btn-link text-danger" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Saudacao;
