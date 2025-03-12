import styles from "./Project.module.css"
export default function Project({name, desc, date, handleCancel, handleSave}){

    return(
        <div className={styles["container"]}>
            <div className={styles["button-container"]}>
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={handleSave}>Save</button>
            </div>
            <label>TITLE</label>
            <input ref={name} type="text" />

            <label>DESCRIPTION</label>
            <input ref={desc} type="text" />

            <label>DUE DATE</label>
            <input ref={date} type="date" />
    </div>
    );
}