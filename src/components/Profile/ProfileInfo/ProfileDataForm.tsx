import React from "react";
import s from "./ProfileInfo.module.css";
//import { Contact } from "./ProfileInfo";
import { createField, Input, GetStringKeys ,Textarea } from "../../common/formControls/formControls"
import { reduxForm, InjectedFormProps } from "redux-form";
import style from "../../common/formControls/FormControls.module.css";
import { profileType } from "../../types/types";


type propsType = {
    profile: profileType
}
type profileTypeKeys = GetStringKeys<profileType>

const ProfileDataForm: React.FC<InjectedFormProps<profileType, propsType> & propsType>= ({ handleSubmit, profile, error }) => {
    return (

        <form onSubmit={handleSubmit}>
            <div>
                
                <div>{<button onClick={() => { }}>save</button>} 
                
                </div>
                {error && <div className={style.formSummaryControl}>
                    {error} </div>}

                {/*<textarea value={aboutMe} cols="30" rows="10"/>*/}
                <div> <b>About me</b>:{createField<profileTypeKeys>(Textarea, [],
                    "aboutMe", "about me")} </div>

                {/*<>{props.profile.contacts}</>*/}


                <div>
                    <b>Fullname</b>:{createField<profileTypeKeys> (Input, [], "fullName", "Full name")}
                </div>
                <div>
                    <b>Looking for a job</b>: {createField <profileTypeKeys>(Input, [], "lookingForAJob", "", { type: "checkbox" })}
                </div>

                <div>
                    <b>My professional skills</b>:
                        {createField<profileTypeKeys>(Textarea, [],
                        "lookingForAJobDescription", "My professional skills")}
                </div>



                <div>
                    <b>contacts</b>: {Object
                        .keys(profile.contacts).map((key) => {
                            return <div key={key} className={s.contacts}>
                                <b> {key}: {createField(Input, [], "contacts." + key, key)}</b>
                            </div>
                        })}
                </div>


            </div>
        </form>

    )
}
export const ProfileDataReduxForm = reduxForm<profileType, propsType>({ form: 'editProfile' })(ProfileDataForm);
export default ProfileDataReduxForm;