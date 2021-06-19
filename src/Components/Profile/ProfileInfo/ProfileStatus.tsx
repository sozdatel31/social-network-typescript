import React, { ChangeEvent } from "react";
import {ProfileType} from "../../../Redux/profile-reducer";

type ProfileInfoType = {
    profile: ProfileType | undefined
}

class ProfileStatus extends React.Component<any> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusProfile(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
       this.setState({
               status: e.currentTarget.value
           }
       )

    }
    componentDidUpdate(prevProps: Readonly<any>,
                       prevState: Readonly<{}>,
                       snapshot?: any): void {
            if (prevProps.status !== this.props.status) {
                this.setState({
                    status: this.props.status
                })
            }
    }

    render() {

        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</span>
                </div>
                }
                {this.state.editMode &&
                <div><input  autoFocus={true}
                             onChange={this.onStatusChange}
                             onBlur={this.deactivateEditMode}
                             type="text" value={this.state.status}/></div>
                }
            </div>)
    }
}

export default ProfileStatus;