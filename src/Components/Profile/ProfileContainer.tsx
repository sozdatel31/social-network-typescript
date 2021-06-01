import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, PostType, profilePageType, ProfileType} from "../../Redux/profile-reducer";
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
