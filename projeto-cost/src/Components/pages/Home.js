import { Link } from "react-router-dom";
import img from '../../img/savings.svg'
function Home(){
    return(
        <section>
            <h1>Bem-vindo ao <span>Cost</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo</p>
            <img src={img} alt="cost" />
            <Link>Novo Projeto</Link>
        </section>
    )
}
export default Home;