import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile, PostType, profilePageType, ProfileType, setUserProfile} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom"
import {getProfile} from "../../api/api";

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType & PropsType

type PathParamsType = {
    userId: string,
}
type PropsType = RouteComponentProps<PathParamsType>
type MapStatePropsType = {
    profile?: ProfileType,
    postData: Array<PostType>,
    changePostText: string,
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType, profilePageType> {
    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    postData: state.profilePage.postData,
    changePostText: state.profilePage.changePostText,
    isAuth: state.auth.isAuth
})


let WithUrlDataContainerContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps,
    {getUserProfile})(WithUrlDataContainerContainerComponent);
