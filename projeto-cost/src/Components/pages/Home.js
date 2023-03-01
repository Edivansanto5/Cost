import { Link } from "react-router-dom";
import img from '../../img/savings.svg'
import styles from '../CSS/Home.module.css'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Cost</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo</p>
            <Link>Novo Projeto</Link>
            <img src={img} alt="cost" />
        </section>
    )
}
export default Home;