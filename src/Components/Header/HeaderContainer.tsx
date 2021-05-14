import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";

class HeaderContainer extends React.Component<any, any>{

    componentDidMount(): void {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
            {withCredentials: true}
            ).then(response => {
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data
                    this.props.setAuthUserData( id, email, login)
                }

        })
    }

    render() {
       return <Header {...this.props} />
   }

}

const mapStateToProps = (state:AppStateType) => ({
isAuth: state.auth.isAuth,
login: state.auth.data.login,
})
export default connect(mapStateToProps,{setAuthUserData}) (HeaderContainer);