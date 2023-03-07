import styles  from '../CSS/Select.module.css'

function Select({text,name,option,handleOnchange,value}){
  return(
    <div className={styles.form_control}> 
      <label htmlFor={name}>{text}
      </label>
      <select name={name} id={name}>
        <option>Selecione uma Opção</option>
      </select>
    </div>
  )
}
export default Select;