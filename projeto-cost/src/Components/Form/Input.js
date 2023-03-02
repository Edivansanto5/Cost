import styles from '../CSS/Input.module.css'

function Input({type,text,name,placeholder,handleOnchange,value}){
  return(
    <div className={styles.input}> 
      <label htmlFor=""></label>
      <input type="text" name="" id="" />
    </div>
  )
}
export default Input;