import React, { useState, useEffect } from "react";




const ProfileStatusWithHooks = (props) => {
    
    //let stateWithSetState=useState(true);
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    

    useEffect(() => {
        
        setStatus(props.status) }, [props.status])

    /* let editMode=stateWithSetState[0];
    let setEditMode=stateWithSetState[1]; */

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deActivateEditMode = () => {
    
        setEditMode(false);
        props.updateStatus(status);
        


    }

    /* if(status!==props.status)
            { setStatus({status:props.status})} */



    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }




    return (
        <div>

            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode} >{props.status || "no STATUS"}</span>
                </div>}

            {editMode &&
                <div>
                    <input onBlur={deActivateEditMode} onChange={onStatusChange} autoFocus={true} value={status} />
                    
                </div>}

        </div>
    )
}
export default ProfileStatusWithHooks;