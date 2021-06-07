import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, LogoutThunkCreator, setAuthUserData} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";

class HeaderContainer extends React.Component<any, any>{

    componentDidMount(): void {
        this.props.getAuthUserData()
    }

    render() {
       return <Header {...this.props} />
   }

}

const mapStateToProps = (state:AppStateType) => ({
isAuth: state.auth.isAuth,
login: state.auth.data.login,
})
export default connect(mapStateToProps,{getAuthUserData,LogoutThunkCreator}) (HeaderContainer);