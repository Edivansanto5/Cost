import styles from'../CSS/NovoProjeto.module.css'
import ProjetoForm from '../Projetos/ProjetosForm'

function NovoProjeto(){
    return(
        <div className={styles.novoprojeto_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu Projeto para depois adicionar os Serviços</p>
            <ProjetoForm/>
            
        </div>
    )
}
export default NovoProjeto