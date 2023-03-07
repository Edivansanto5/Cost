import styles from '../CSS/ProjetosForm.module.css'
import LinkButtom from '../Layout/LinkButtom';
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
            <Input 
            type='number'
            text='Informe o Valor do Orçamento'
            name='budget'
            placeholder='Informe o Valor do Orçamento '/>
          
            <div>
            <select name="category_id">
                <option disabled selected >Selecione a Categoria</option>
            </select>
            </div>
            {/* <div>
                <input type='submit' value='Criar Projeto'/>
            </div>    */}
            <LinkButtom type='submit' text='Criar Projeto'/>
        </form>
    )
}

export default ProjetoForm;