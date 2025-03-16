import classes from './Home.module.css';
import { Fragment, useState, useRef } from "react";
import logo from '../../assets/no-projects.png';
import Project from '../Project/Project';
import ProjectList from '../ProjectList/ProjectList';
import ProjectTask from '../Tasks/ProjectTask';
import { Plus } from "lucide-react"; // Importing the Plus icon


export default function Home(){
    const nameProject = useRef();
    const descProject = useRef();
    const dateProject = useRef();


    const [projects, setProjects] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCancel = () =>{
        setIsClicked(false);
    }

    const handleSave = () => {
        const newProject = {
            name: nameProject.current.value,
            desc: descProject.current.value,
            date: dateProject.current.value,
            tasks: []
        };

        setProjects(prevProjects => [...prevProjects, newProject]);
        setIsClicked(false);
    } 

    const handleSelectProject  = (prName)=>{
        const pr = projects.find((pr)=>pr.name === prName);
        setSelectedProject(pr);
    }

    const handleDelete = (projectDelete) =>{
        const upDatedProjects = projects.filter(pr=>pr ==! projectDelete);
        setProjects(upDatedProjects);
        setSelectedProject(null);
    }

    const handleBack = () => {
        setSelectedProject(null);
    };

    return (
        <Fragment>
            <div className={classes["Area"]}>
                <div className={classes["projectArea"]}>
                    <h2>Your Projects</h2>
                    <button onClick={() => setIsClicked(true)}><Plus size={16} /> Add Project</button>
                    <div className={classes["projects"]}>
                        {/* ✅ Pass the function to select a project */}
                        <ProjectList projects={projects} onSelect={handleSelectProject} />  
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

                {isClicked && (
                    <Project 
                        handleCancel={handleCancel} 
                        name={nameProject} 
                        desc={descProject} 
                        date={dateProject} 
                        handleSave={handleSave} 
                    />
                )}

                {selectedProject && <ProjectTask project={selectedProject} onBack={handleBack} onDelete={handleDelete} />}
            </div>   
        </Fragment>
    );

}