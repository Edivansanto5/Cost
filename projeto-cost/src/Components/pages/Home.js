
import img from '../../img/savings.svg'
import styles from '../CSS/Home.module.css'
import LinkButtom from "../Layout/LinkButtom";

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Cost</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo</p>
           
            <LinkButtom to='/NovoProjeto'text='Criar Projeto'/>
            <img src={img} alt="cost" />
        </section>
    )
}
export default Home;