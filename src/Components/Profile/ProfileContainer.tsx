import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusProfile,
    getUserProfile,
    PostType,
    profilePageType,
    ProfileType,
    updateStatusProfile
} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom"
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType & PropsType

type PathParamsType = {
    userId: string,
}
type PropsType = RouteComponentProps<PathParamsType>
type MapStatePropsType = {
    profile?: ProfileType,
    postData: Array<PostType>,
    isAuth: boolean,
    status: string
}
type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getStatusProfile: (userId: string) => void
    updateStatusProfile: (status:string) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType, profilePageType> {
    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfile(userId);
        this.props.getStatusProfile(userId);
    }

    render() {

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatusProfile = {this.props.updateStatusProfile}

            />
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    postData: state.profilePage.postData,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatusProfile, updateStatusProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
