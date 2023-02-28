import Container from "./Container";
import { Link } from "react-router-dom";
import style from '../CSS/Navbar.module.css'
import logo from '../../../src/img/costs_logo.png'

function Navbar(){
    return(
        <nav>
            <Container>
                <Link to='/'> <img src={logo} alt="cost" /></Link>
                <Link to='/'>Home</Link>
                <Link to='/contato'>Contato</Link>
                <Link to='/novoProjeto'>Novo Projeto</Link>
                <Link to='/sobre'>Sobre</Link>
            </Container>

        </nav>
        
    )
}
export default Navbar;