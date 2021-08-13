import {ProfileType} from "../../../Redux/profile-reducer";
import React from "react";
import {Input} from "../../common/FormControls/FormsControls";
import {requiredField} from "../../../utils/validators/validators";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const ProfileDataForm = (props: InjectedFormProps<FormDataType>, profile: ProfileType) => {
    return <form>
        <div>
            <button onClick={()=>{} }>save</button>
        </div>
        <div><b>About ME:</b>{profile.aboutMe}</div> <Field placeholder={'AboutMe'} name={'AboutMe'} component={Input} validate={[requiredField]}/>
    {/*    <b>Contacts :</b> {Object.keys(profile.contacts ? profile.contacts : {}).map(key => {*/}
    {/*    // @ts-ignore*/}
    {/*    return */}
    {/*    <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
    {/*})*/}
    {/*}*/}

        <div>{profile.fullName}</div>
        <div>{profile.lookingForAJob ? "ищу" : "не ищу"}</div>
        <div>{profile.lookingForAJobDescription}</div>
    </form>
}

type FormDataType = {
    AboutMe: string,
    password?: string,
    rememberMe?: boolean
    error?: string
}

const ProfileReduxForm = reduxForm<FormDataType>({
    form: "edit-profile"
})(ProfileDataForm)

export default ProfileReduxForm