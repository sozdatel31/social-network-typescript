import React from "react";
import {ProfileType} from "../../../Redux/profile-reducer";

type ProfileInfoType = {
    profile: ProfileType | undefined
}

class ProfileStatus extends React.Component<any> {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        debugger
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {

        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div><input autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.props.status}/></div>
                }
            </div>)
    }
}

export default ProfileStatus;