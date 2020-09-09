import React from "react";
import s from "./ProfileInfo.module.css";
//import { Contact } from "./ProfileInfo";
import { createField, Input, Textarea } from "../../common/formControls/formControls"
import { reduxForm } from "redux-form";
import style from "../../common/formControls/FormControls.module.css";




const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (

        <form onSubmit={handleSubmit}>
            <div>
                
                <div>{<button onClick={() => { }}>save</button>} 
                
                </div>
                {error && <div className={style.formSummaryControl}>
                    {error} </div>}

                {/*<textarea value={aboutMe} cols="30" rows="10"/>*/}
                <div> <b>About me</b>:{createField(Textarea, [],
                    "aboutMe", "about me")} </div>

                {/*<>{props.profile.contacts}</>*/}


                <div>
                    <b>Fullname</b>:{createField(Input, [], "fullName", "Full name")}
                </div>
                <div>
                    <b>Looking for a job</b>: {createField(Input, [], "lookingForaJob", "", { type: "checkbox" })}
                </div>

                <div>
                    <b>My professional skills</b>:
                        {createField(Textarea, [],
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
export const ProfileDataReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataForm);
export default ProfileDataReduxForm;