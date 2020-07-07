import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import DialogItem from "../../Dialogs/DialogItem/DialogItem";
import Message from "../../Dialogs/Message/Message";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import Profile from "../Profile";
import userPhoto from "../../../assets/images/user.png";


const ProfileInfo = ({profile, status, updateStatus }) => {
    if (!profile) {
        return <Preloader/>
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


    return (
        <div>
            <div><img src={"https://klike.net/uploads/posts/2019-01/1547365376_1.jpg"}/></div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.userPhoto}/>
                <div> <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/> </div>
                {/*<textarea value={aboutMe} cols="30" rows="10"/>*/}
                <div> {profile.aboutMe} </div>
                <div>{"Poisk raboty:" + profile.lookingForAJobDescription}</div>
                <div>{profile.lookingForAJob === true ?<img className={s.poiskRabotyPhoto} src={"https://ruherald.com/wp-content/uploads/2018/06/jobs5.jpg"}/> : null}</div>
                {/*<>{props.profile.contacts}</>*/}


                <div>
                    {profile.fullName}
                </div>
                <div>
                    <div>{profile.contacts.facebook}</div>
                    <div>{profile.contacts.youtube}</div>
                    <div>{profile.contacts.vk}</div>
                    <div>{profile.contacts.instagram}</div>
                    <div>{profile.contacts.github}</div>
                    <div>{profile.contacts.twitter}</div>
                    <div>{profile.contacts.website}</div>
                </div>
            </div>
        </div>


    )
}
export default ProfileInfo;