import styles from './App.module.css'
import { Header } from './components/Header'
import { TaskCreation } from './components/TaskCreation'

import './global.css'

export function App() {
    return (
        <div className={styles.container}>
            <Header />

            <div>
                <TaskCreation />
            </div>
        </div>
    ) 
}
