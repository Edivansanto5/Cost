import styles from '../CSS/ProjetosForm.module.css'
import Input from '../Form/Input';

function ProjetoForm(){
    return(
        
        <form className={styles.form}>
           <Input 
           type='text' 
           text='Nome do Projeto'
           name='name' 
           placeholder='Insira o Nome do Projeto'
           />
           
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