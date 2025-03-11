import styles from './ProjectTask.module.css';
import { useState,useRef } from 'react';

export default function ProjectTask({ project, onBack, onDelete }) {
    const [tasks, setTasks] = useState([]);
    const taskRef = useRef();

    const addTask = () => {
        if (taskRef.current.value.trim() !== "") {
            setTasks([...tasks, taskRef.current.value]);
            taskRef.current.value = "";
        }
    };

    const updateTask = (index, newValue) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = newValue;
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className={styles.container}>
            <div className={styles["button-container"]}>
                <button className={styles["cancel"]} onClick={onBack}>Back</button>
                <button className={styles["delete"]} onClick={() => onDelete(project)}>Delete</button>
            </div>

            <label>TITLE</label>
            <input type="text" value={project.name} readOnly />

            <label>DESCRIPTION</label>
            <input type="text" value={project.desc} readOnly />

            <label>DUE DATE</label>
            <input type="text" value={project.date} readOnly />

            <div className={styles["taskContainer"]}>
                <h3>Tasks</h3>
                <div className={styles["taskInput"]}>
                    <input ref={taskRef} type="text" placeholder="Enter a task..." />
                    <button onClick={addTask} className={styles["addTask"]}>Add Task</button>
                </div>

                <ul>
                    {tasks.map((task, index) => (
                        <li key={index} className={styles.taskItem}>
                            <input
                                type="text"
                                value={task}
                                onChange={(e) => updateTask(index, e.target.value)}
                                className={styles["taskInputField"]}
                            />
                            <button onClick={() => deleteTask(index)} className={styles["deleteTask"]}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}