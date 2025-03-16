import classes from './Home.module.css';
import { Fragment } from "react";
import logo from '../../assets/no-projects.png';
import Project from '../Project/Project';
import ProjectList from '../ProjectList/ProjectList';
import ProjectTask from '../Tasks/ProjectTask';
import { Plus } from "lucide-react"; // Importing the Plus icon
import { useGlobal } from '../GlobalContext/GlobalContext';

export default function Home(){
    
    const {isClicked, selectedProject, setIsClicked} = useGlobal();

    return (
        <Fragment>
            <div className={classes["Area"]}>
                <div className={classes["projectArea"]}>
                    <h2>Your Projects</h2>
                    <button onClick={() => setIsClicked(true)}><Plus size={16} /> Add Project</button>
                    <div className={classes["projects"]}>
                        {/* ✅ Pass the function to select a project */}
                        <ProjectList />  
                    </div>
                </div>
                {!isClicked && !selectedProject && (
                    <div className={classes["mainArea"]}>
                        <div className={classes["mainAreaProjects"]}>
                            <img src={logo} alt='logo'></img>
                            <h2>No Projects Selected</h2>
                            <h3> Select a project or get started with a new one</h3>
                            <button onClick={() => setIsClicked(true)}>Create a new project</button>
                        </div>
                    </div>
                )}
                {isClicked && (<Project />)}
                {selectedProject && <ProjectTask/>}
            </div>   
        </Fragment>
    );

}