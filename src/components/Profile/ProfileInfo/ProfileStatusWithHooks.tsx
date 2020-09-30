import React, { useState, useEffect } from "react";


type propsType={
    status:string,
    updateStatus:(status:any)=>void,
    error:any
}

const ProfileStatusWithHooks:React.FC<propsType> = ({status, updateStatus, error}) => {
    
    //let stateWithSetState=useState(true);
    let [editMode, setEditMode] = useState(false);
    let [statusHooks, setStatus] = useState(status);
    

    useEffect(() => {
        
        setStatus(status) }, [status])

    /* let editMode=stateWithSetState[0];
    let setEditMode=stateWithSetState[1]; */

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deActivateEditMode = () => {
    
        setEditMode(false);
        updateStatus(status);
        


    }

    /* if(status!==props.status)
            { setStatus({status:props.status})} */



    const onStatusChange = (e:any) => {
        setStatus(e.currentTarget.value)
    }




    return (
        <div>

            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode} >{status || "no STATUS"}</span>
                </div>}

            {editMode &&
                <div>
                    <input onBlur={deActivateEditMode} onChange={onStatusChange} autoFocus={true} value={statusHooks} />
                    
                </div>}

        </div>
    )
}
export default ProfileStatusWithHooks;