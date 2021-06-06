import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>

    </div>

}

type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       name={'login'}
                       component={Input}
                        validate={[requiredField]}
                />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input}
                       validate={[requiredField]}
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
const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)


