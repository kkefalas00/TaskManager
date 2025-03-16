import styles from './ProjectList.module.css';
import { useGlobal } from '../GlobalContext/GlobalContext';

export default function ProjectList() {

    const {projects, handleSelectProject} = useGlobal();
    return (
        <ul className={styles["projectList"]}>
            {projects.length === 0 ? (
                <p>No projects yet.</p>
            ) : (
                projects.map((pr, index) => (
                    <li key={index} onClick={()=>handleSelectProject(pr.name)}>{pr.name}</li>
                ))
            )}
        </ul>
    );
}