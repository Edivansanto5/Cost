import styles from '../CSS/Container.module.css'

function Container(props){
    return(
        <div>{props.children}</div>
    )
}
export default Container