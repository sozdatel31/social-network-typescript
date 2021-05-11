import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {PostType, profilePageType, ProfileType, setUserProfile} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profile?: ProfileType,
    postData: Array<PostType>,
    changePostText: string
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType, profilePageType> {
    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/10`).then(response => {
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    postData: state.profilePage.postData,
    changePostText: state.profilePage.changePostText,
})
export default connect(mapStateToProps,
    {setUserProfile})(ProfileContainer);