import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusProfile,
    getUserProfile,
    PostType,
    profilePageType,
    ProfileType, savePhoto,
    updateStatusProfile
} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom"
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
    status: string,
    authorizedUserId?: number
}
type MapDispatchPropsType = {
    savePhoto: (arg0: File) => void
    getUserProfile: (userId: string) => void
    getStatusProfile: (userId: string) => void
    updateStatusProfile: (status: string) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType, profilePageType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(this.props.authorizedUserId);
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatusProfile(userId);
    }

    componentDidMount(): void {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>,
                       prevState: Readonly<profilePageType>, snapshot?: any): void {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }

    render() {

        return (
            <Profile {...this.props}
                     savePhoto={this.props.savePhoto}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatusProfile={this.props.updateStatusProfile}

            />
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    postData: state.profilePage.postData,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserId: state.auth.data.userId,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatusProfile, updateStatusProfile, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
