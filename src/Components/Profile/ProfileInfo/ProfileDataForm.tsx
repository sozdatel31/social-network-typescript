import {ProfileType} from "../../../Redux/profile-reducer";
import React from "react";
import {Input} from "../../common/FormControls/FormsControls";
import {requiredField} from "../../../utils/validators/validators";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import style from "../../common/FormControls/FormsControls.module.css";



const ProfileDataForm = ({handleSubmit, profile, error}:any) => {



    return <form onSubmit={handleSubmit}>

        <div>
            <button>save</button>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
        </div>
        <div><b>About ME:</b>{profile.aboutMe}</div>
        <Field placeholder={'AboutMe'} name={'aboutMe'} component={Input} validate={[requiredField]}/>
        <b>Contacts :</b>
        {Object.keys(profile.contacts).map(key => {
            return <div>
                <b>{key}: {<Field placeholder={key} name={"contacts." + key} component={Input}/>}</b>
            </div>
                    })
        }

        <div><b>Full Name:</b>{profile.fullName}</div>
        <Field placeholder={'Full Name'} name={'fullName'} component={Input} validate={[requiredField]}/>
        <div><b>looking for a job: </b>{profile.lookingForAJob ? "ищу" : "не ищу"}</div>
        <Field component={Input} name={'lookingForAJob'} type={"checkbox"}/>
        <div><b>my professional skills:</b>{profile.lookingForAJobDescription}</div>
        <Field placeholder={'My professional skills'} name={'lookingForAJobDescription'} component={Input} validate={[requiredField]}/>
    </form>
}

export type FormDataProfileType = {
    aboutMe: string,
    lookingForAJob: boolean,
    fullName: string
    lookingForAJobDescription: string
}

const ProfileReduxForm = reduxForm<FormDataProfileType>({
    form: "edit-profile"
})(ProfileDataForm)

export default ProfileReduxForm