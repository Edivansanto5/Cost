import { FaFacebook, FaInstagram, FaLinkedin } from'react-icons/fa'
import styles from '../CSS/Footer.module.css'


function Footer() {
    return (
        <footer >
            <ul className={styles.footer}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
            </ul>


        </footer>
    )
}
export default Footer;