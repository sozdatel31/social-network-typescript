import {ProfileType} from "../../../Redux/profile-reducer";
import React from "react";
import {Input} from "../../common/FormControls/FormsControls";
import {requiredField} from "../../../utils/validators/validators";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


const ProfileDataForm = (props: InjectedFormProps<FormDataProfileType>, profile: ProfileType) => {

    const onSubmit = (DataForm: FormDataProfileType) => {
        console.log(DataForm)
    }

    return <form onSubmit={props.handleSubmit}>
        <div>
            <button>save</button>
        </div>
        <div><b>About ME:</b>{profile.aboutMe}</div>
        <Field placeholder={'AboutMe'} name={'AboutMe'} component={Input} validate={[requiredField]}/>
        {/*    <b>Contacts :</b> {Object.keys(profile.contacts ? profile.contacts : {}).map(key => {*/}
        {/*    // @ts-ignore*/}
        {/*    return */}
        {/*    <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
        {/*})*/}
        {/*}*/}

        <div><b>Full Name:</b>{profile.fullName}</div>
        <Field placeholder={'Full Name'} name={'fullName'} component={Input} validate={[requiredField]}/>
        <div><b>looking for a job: </b>{profile.lookingForAJob ? "ищу" : "не ищу"}</div>
        <Field component={Input} name={'lookingJob'} type={"checkbox"}/>
        <div><b>my professional skills:</b>{profile.lookingForAJobDescription}</div>
        <Field placeholder={'My professional skills'} name={'profSkills'} component={Input} validate={[requiredField]}/>
    </form>
}

export type FormDataProfileType = {
    AboutMe: string,
    lookingJob: boolean,
    fullName: string
    profSkills: string
}

const ProfileReduxForm = reduxForm<FormDataProfileType>({
    form: "edit-profile"
})(ProfileDataForm)

export default ProfileReduxForm