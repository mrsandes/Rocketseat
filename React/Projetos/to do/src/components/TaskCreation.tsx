import styles from "./TaskCreation.module.css";
import { PlusCircle } from "phosphor-react";
import { Tasks } from "./Tasks";
import { useState, FormEvent, ChangeEvent } from "react";

export function TaskCreation() {
  const [newTaskText, setNewTaskText] = useState("");

  const [taskList, setTaskList] = useState(["limpar a casa"]);

  console.log(taskList);

  function handleCreateNewTask(event: FormEvent) {
    let taskExists = false;

    taskList.map((task) => {
      if (newTaskText === task) {
        taskExists = true;
      }

      event.preventDefault();
      setNewTaskText("");
    });

    if (!taskExists && newTaskText.length > 0) {
      event.preventDefault();

      setTaskList((state) => [...state, newTaskText]);
      setNewTaskText("");
    }
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskText(event.target.value);
  }

  function deleteTask(taskToDelete: string) {
    const taskListWithoutDeletedOne = taskList.filter((task) => {
      return task !== taskToDelete;
    });

    setTaskList(taskListWithoutDeletedOne);
  }

  function finishingTask(taskToOrder: string, isFinished: boolean) {
    if (!isFinished) {
      const taskListOrdened = taskList.filter((task) => {
        return task !== taskToOrder;
      });

      taskListOrdened.push(taskToOrder);
      setTaskList(taskListOrdened);
    } else {
      const taskListOrdened = taskList.filter((task) => {
        return task !== taskToOrder;
      });

      taskListOrdened.unshift(taskToOrder);
      setTaskList(taskListOrdened);
    }
  }

  return (
    <div>
      <form className={styles.creationArea} onSubmit={handleCreateNewTask}>
        <textarea
          className={styles.textArea}
          placeholder="Adicione uma nova tarefa"
          value={newTaskText}
          name="creation"
          onChange={handleNewTaskChange}
        />

        <button type="submit" className={styles.taskButton}>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

      <Tasks
        taskList={taskList}
        onDeleteTask={deleteTask}
        onFinishingTask={finishingTask}
        createdTasks={taskList.length}
      />
    </div>
  );
}
