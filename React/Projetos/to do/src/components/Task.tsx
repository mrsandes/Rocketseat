import { Check, Trash } from "phosphor-react"
import { useState } from "react"
import styles from "./Task.module.css";

interface TaskProps {
    content: string,
    onDeleteTask: (task: string) => void
    onFinishingTask: (taskToOrder: string, isFinished: boolean) => void
    onUpdateTaskStatus: (status: boolean) => void
}

export function Task({ content, onDeleteTask, onFinishingTask, onUpdateTaskStatus}: TaskProps) {
    const [isFinished, setIsFinished] = useState(false)

    function handleFinishingTask() {
        setIsFinished(state => {
            return !state
        })

        onFinishingTask(content, isFinished)
        onUpdateTaskStatus(isFinished)
    }

    function handleDeleteTask() {
        onDeleteTask(content)
        if (isFinished) {
            onUpdateTaskStatus(true)
        }
    }

    const checkboxCheckedClassname = isFinished
        ? styles['checkboxChecked']
        : styles['checkboxUnchecked']
    const paragraphCheckedClassname = isFinished
        ? styles['contentCheckboxChecked']
        : ''

    return (
        <div className={styles.task}>
            <label htmlFor="checkbox" onClick={handleFinishingTask}>
                <input readOnly type="checkbox" checked={isFinished} />
                <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                    {isFinished && <Check size={12} />}
                </span>
            </label>

            <p className={`${styles.taskContent} ${paragraphCheckedClassname}`}>{content}</p>

            <button className={styles.taskDelete} onClick={handleDeleteTask}>
                <Trash size={20}/>
            </button>
        </div>
    )
}