import React, {ChangeEvent, useEffect, useState} from "react";
import {ProfileType} from "../../../Redux/profile-reducer";


function ProfileStatusWithHook(props: any) {

    let [editMode, setEditMode] = useState<boolean>(false)
    let [status, setStatus] = useState<string>(props.status)

    useEffect(()=> {
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusProfile(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{status || "No status"}</span>
            </div>
            }
            {editMode &&
            <div><input autoFocus={true}
                        onChange={onStatusChange}
                        onBlur={deactivateEditMode}
                        type="text" value={status}/></div>
            }
        </div>)
}


export default ProfileStatusWithHook;