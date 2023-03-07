import styles from '../CSS/ProjetosForm.module.css'

import LinkButtom from '../Layout/LinkButtom';
import Input from '../Form/Input';
import Select from '../Form/Select';

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
          
          <Select name='category_id' text='Selecione a Categoria'
          />
           
            <LinkButtom type='submit' text='Criar Projeto'/>
        </form>
    )
}

export default ProjetoForm;