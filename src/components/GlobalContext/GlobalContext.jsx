import { createContext, useContext, useState, useRef } from "react";

const GlobalContext = createContext();

export default function GlobalProvider({children}){

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
        if (!nameProject.current || !descProject.current || !dateProject.current) {
            console.error("One or more refs are undefined!");
            return;
        }
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

    return <GlobalContext.Provider
    value={{
      nameProject,
      descProject,
      dateProject,
      projects,
      setProjects,
      isClicked,
      setIsClicked,
      selectedProject,
      setSelectedProject,
      handleCancel,
      handleSave,
      handleSelectProject,
      handleDelete,
      handleBack,
    }}
  >
    {children}
  </GlobalContext.Provider>
}

export function useGlobal(){
    return useContext(GlobalContext);
}