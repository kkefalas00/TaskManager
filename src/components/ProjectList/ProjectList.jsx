import styles from './ProjectList.module.css';

export default function ProjectList({ projects, onSelect }) {
    return (
        <ul className={styles["projectList"]}>
            {projects.length === 0 ? (
                <p>No projects yet.</p>
            ) : (
                projects.map((pr, index) => (
                    <li key={index} onClick={()=>onSelect(pr.name)}>{pr.name}</li>
                ))
            )}
        </ul>
    );
}