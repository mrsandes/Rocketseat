import styles from './TaskCreation.module.css'
import { sum} from 'phosphor-react'

export function TaskCreation() {
    return (
        <div className={styles.creationArea}>
            <form action="">
                <textarea 
                    className={styles.textArea}
                    name="creation"

                />

                <button className={styles.taskButton}>
                    Criar
                </button>
            </form>
            
        </div>
    )
}