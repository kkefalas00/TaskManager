import styles from "./Project.module.css"
import { useGlobal } from "../GlobalContext/GlobalContext";

export default function Project(){

    const {nameProject, descProject, dateProject, handleCancel, handleSave} = useGlobal();
    return(
        <div className={styles["container"]}>
            <div className={styles["button-container"]}>
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={handleSave}>Save</button>
            </div>
            <label>TITLE</label>
            <input ref={nameProject} type="text" />

            <label>DESCRIPTION</label>
            <input ref={descProject} type="text" />

            <label>DUE DATE</label>
            <input ref={dateProject} type="date" />
    </div>
    );
}