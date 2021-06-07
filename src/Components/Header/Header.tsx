import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {LogoutThunkCreator} from "../../Redux/auth-reducer";


// type HeaderPropsType = {
//     isAuth: boolean,
//     login: string | undefined
// }

function Header(props: any) {
    return (
        <header className={s.header}>
            <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"/>

            <div className={s.loginBlock}>
                {props.isAuth ?  <div>{props.login}
                <button onClick={props.LogoutThunkCreator}>Log Out</button> </div>:
             <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;