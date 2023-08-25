import React, { useState } from 'react';

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Adicione o novo usuário ao localStorage
    const newUser = { username, password };
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    onRegister();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Cadastrar Usuário</h2>
              <div className="mb-3">
                <label htmlFor="newUsername" className="form-label">Novo Usuário:</label>
                <input
                  type="text"
                  className="form-control"
                  id="newUsername"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">Nova Senha:</label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" onClick={handleRegister}>Cadastrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
