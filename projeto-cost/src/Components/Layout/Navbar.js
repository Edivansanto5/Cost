import Container from "./Container";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <Container>
                <Link to='/'>Home</Link>
                <Link to='/contato'>Contato</Link>
                <Link to='/novoProjeto'>Novo Projeto</Link>
                <Link to='/sobre'>Sobre</Link>
            </Container>

        </nav>
        
    )
}
export default Navbar;