import Container from "./Container";
import { Link } from "react-router-dom";
import style from '../CSS/Navbar.module.css'
import logo from '../../../src/img/costs_logo.png'

function Navbar(){
    return(
        <nav className={style.navbar}>
            <Container>
                <Link to='/'> <img src={logo} alt="cost" /></Link>
               <ul className={style.list}>
                    <li className={style.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={style.item}>
                        <Link to='/contato'>Contato</Link>
                    </li>
                    <li className={style.item}>
                        <Link to='/sobre'>Sobre</Link>
                    </li>
               </ul>
            </Container>

        </nav>
        
    )
}
export default Navbar;