import styles from '../CSS/ProjetosForm.module.css'

function ProjetoForm(){
    return(
        
        <form className={styles.form}>
            <div>
                <input type="text" placeholder="Informe o nome do Projeto" />
            </div>
            <div>
                <input type="number" placeholder="Informe o Orçamento Total" />
            </div>
            <div>
            <select name="category_id">
                <option disabled selected >Selecione a Categoria</option>
            </select>
            </div>
            <div>
                <input type='submit' value='Criar Projeto'/>
            </div>   
        </form>
    )
}

export default ProjetoForm;