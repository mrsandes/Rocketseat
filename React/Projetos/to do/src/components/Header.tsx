import styles from './Header.module.css'
import toDoLogo from '../assets/Logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={toDoLogo} alt="Logotipo do toDo List" />
        </header>
    )
}