import React, { useState, useEffect,FC, ChangeEvent } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileDataForm from "./ProfileDataForm"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import Alert2 from "../../common/Alert/alert2"
import { profileType, contactsType } from "../../types/types";
import { type } from "os";
type propsType={
    saveProfile:(formData:profileType) => Promise<any>,
    savePhoto:(file:File)=>void,
    error:any,
    isOwner:boolean,
    profile:profileType|null,
    status:string,
    updateStatus:(status:string)=>void
}
const ProfileInfo:React.FC<propsType> = ({ profile, status, updateStatus, isOwner, savePhoto,  error, saveProfile }) => {
    const [editMode, setEditMode] = useState(false);
/*     const [isSaveProfile,setIsSaveProfileCome]=useState(false)
    
    useEffect(function(){
        if(!setIsSaveProfileCome(false)){

        setEditMode(false)
        
        
    } 
      }, [isSaveProfile])  */
    if(!profile){ return <Preloader/>}
  

    const onMainPhotoSelected = (e:ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])

        }

    }
    const onSubmit = (formData: any) => {
        // todo: remove then
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }
 /*    const onSubmit = (formData:any) => {
        //saveProfile(formData);
        //setEditMode(false)
       saveProfile(formData)
       setIsSaveProfileCome(true)
       /*  .then(
            () => {
                s etEditMode(false);
            }
        ) */
     
        


    return (
        <div>
            <div><img src={"https://klike.net/uploads/posts/2019-01/1547365376_1.jpg"} /></div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.userPhoto} />
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                <div> <b>Status</b> <ProfileStatusWithHooks error={error} status={status} updateStatus={updateStatus} /> </div>
                <div>  {editMode ? <ProfileDataForm initialValues={profile} profile={profile}  onSubmit={onSubmit} 
                  /> :
                 <ProfileData profile={profile} isOwner={isOwner}
                    toEditMode={() => { setEditMode(true) }} />} </div>
                    <div><Alert2 error={error}/></div>

            </div>
        </div>


    )
}

 type ProfileDataType={
    profile:profileType,
    isOwner:boolean,
    toEditMode:()=>void

} 

const ProfileData:React.FC<ProfileDataType> = ({ profile, isOwner, toEditMode }) => {
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
                    .keys(profile.contacts).map(                   
                        (key) => {
                        return <Contact key={key}
                            contactTitle={key} contactValue={profile.contacts[key as keyof contactsType]}  />
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
 type ContactType={
    contactValue:any,
    contactTitle:any
} 
export const Contact:React.FC<ContactType>= ({ contactTitle, contactValue }) => {
    return <div className={s.contacts}>  <b>{contactTitle}</b>:{contactValue}
    </div>


}
export default ProfileInfo;