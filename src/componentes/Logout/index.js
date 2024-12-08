import React from 'react';

// import { Container } from './styles';

const handleLogout = () => {
  sessionStorage.removeItem('token');
  window.location.reload();
};

function Logout() {
  return (
    <button className="btn btn-danger " onClick={handleLogout}>
      Sair
    </button>
  );
}

export default Logout;
