import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {LoginThunkCreator, LogoutThunkCreator} from "../../Redux/auth-reducer";
import { Redirect } from 'react-router-dom';
import {AppStateType} from "../../Redux/redux-store";

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.LoginThunkCreator(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>

    </div>

}

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       component={Input}
                        validate={[requiredField]}
                />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input}
                       validate={[requiredField]} type={'password'}
                />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={"checkbox"}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)


export default connect(mapStateToProps, {LoginThunkCreator, LogoutThunkCreator})(Login)