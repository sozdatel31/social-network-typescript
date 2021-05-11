import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {PostType, profilePageType, ProfileType, setUserProfile} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom"
type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType & PropsType

type PathParamsType = {
    userId: string,
}
type PropsType = RouteComponentProps<PathParamsType>
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
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/Profile/` + userId).then(response => {
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


let WithUrlDataContainerContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps,
    {setUserProfile})(WithUrlDataContainerContainerComponent);
