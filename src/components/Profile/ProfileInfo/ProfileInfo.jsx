import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileDataForm from "./ProfileDataForm"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    //
    // let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} avatar={d.avatar} id={d.id}/>);
    //let contactsElements = props.profile.contacts.map(c => c.contacts);
    // let newPostTextMessage = state.newPostTextMessage;

    //let aboutMe = props.profile.aboutMe;

    // let Contacts = props.profile.contacts.map( function(obj){return obj.value});
    // for(i=0; i<ContactsMassive.length;i++){
    //     let element=ContactMassive[i]
    // }
    // // if(props.profile.lookingForAJob===true){return ( "i am looking a job")}
    //  let Contacts=["facebook",  "website", "vk", "twitter", "instagram", "youtube", "github", "mainLink"];
    //  let index;
    //  for (index=0; index<Contacts.length, ++index;){ (Contacts[index])};
    //  let state=props.profile.contacts;
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])

        }

    }
    const onSubmit = (formData) => {
        //saveProfile(formData);
        //setEditMode(false)
        saveProfile(formData)
        .then(
            () => {
                setEditMode(false);
            }
        )
    }
        


    return (
        <div>
            <div><img src={"https://klike.net/uploads/posts/2019-01/1547365376_1.jpg"} /></div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.userPhoto} />
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                <div> <b>Status</b> <ProfileStatusWithHooks status={status} updateStatus={updateStatus} /> </div>
                <div>  {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> : <ProfileData profile={profile} isOwner={isOwner}
                    toEditMode={() => { setEditMode(true) }} />} </div>

            </div>
        </div>


    )
}



const ProfileData = ({ profile, isOwner, toEditMode }) => {
    return (
        <div>
            <div>{isOwner && <button onClick={toEditMode}>edit</button>} </div>

            {/*<textarea value={aboutMe} cols="30" rows="10"/>*/}
            <div> <b>About me</b> {profile.aboutMe} </div>
            {/*     <div>{"Poisk raboty:" + profile.lookingForAJobDescription}</div>
            <div>{profile.lookingForAJob === true ?
                <img className={s.poiskRabotyPhoto} src={"https://ruherald.com/wp-content/uploads/2018/06/jobs5.jpg"} /> : null}</div> */}
            {/*<>{props.profile.contacts}</>*/}


            <div>
                <b>Fullname</b>  {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>contacts</b>: {Object
                    .keys(profile.contacts).map((key) => {
                        return <Contact key={key}
                            contactTitle={key} contactValue={profile.contacts[key]} />
                    })}
            </div>
            {/*    <div>
                <div>{profile.contacts.facebook}</div>
                <div>{profile.contacts.youtube}</div>
                <div>{profile.contacts.vk}</div>
                <div>{profile.contacts.instagram}</div>
                <div>{profile.contacts.github}</div>
                <div>{profile.contacts.twitter}</div>
                <div>{profile.contacts.website}</div>
            </div> */}
        </div>

    )
}
export const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contacts}>  <b>{contactTitle}</b>:{contactValue}
    </div>


}
export default ProfileInfo;