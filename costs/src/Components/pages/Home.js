import React from 'react';
import { Link } from 'react-router-dom';



const Home = () =>{
  return (
    <div className='home'>
      
      <nav>
      <h1>Página Inicial</h1>
        <ul>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li>
            <Link to="/NovoProjeto">Novo Projeto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;