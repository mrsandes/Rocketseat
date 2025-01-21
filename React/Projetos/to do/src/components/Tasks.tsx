import styles from "./Tasks.module.css"
import { Scroll } from "phosphor-react";
import { Task } from './Task';
import { useState } from "react";

interface TasksProps {
    taskList: string[]
    onDeleteTask: (task: string) => void
    onFinishingTask: (taskToOrder: string, isFinished: boolean) => void
    createdTasks: number
}

export function Tasks({ taskList, onDeleteTask, onFinishingTask, createdTasks }: TasksProps) {
    const [finishedTasks, setFinishedTasks] = useState(0)

    function updateTaskStatus(status: boolean) {
        if (status) {
            setFinishedTasks(finishedTasks - 1)
        }

        else {
            setFinishedTasks(finishedTasks + 1)
        }
    }

    if (taskList.length === 0) {
        return (
            <div>
                <header className={styles.header}>
                    <div className={styles.createdTasks}>
                        <p>Tarefas criadas</p>
                        <span>{createdTasks}</span>
                    </div>

                    <div className={styles.finishedTasks}>
                        <p>Tarefas criadas</p>
                        <span>{finishedTasks}</span>
                    </div>
                </header>

                <main className={styles.tasksArea}>
                    <Scroll size={72}/>

                    <div>
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </main>
            </div>
        )
    }

    else {
        return (
            <div>
                <header className={styles.header}>
                    <div className={styles.createdTasks}>
                        <p>Tarefas criadas</p>
                        <span>{createdTasks}</span>
                    </div>

                    <div className={styles.finishedTasks}>
                        <p>Concluídas</p>
                        <span>{finishedTasks}</span>
                    </div>
                </header>

                <main className={styles.tasksArea}>
                    {taskList.map(task => {
                        return <Task 
                                    key={task} 
                                    content={task} 
                                    onDeleteTask={onDeleteTask} 
                                    onFinishingTask={onFinishingTask} 
                                    onUpdateTaskStatus={updateTaskStatus}
                                />
                    })}
                </main>
            </div>
        )
    }
}