import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { profileType } from "../types/types";

type propsType={
    saveProfile:(formData:profileType) => Promise<any>,
    savePhoto:(file:File)=>void,
    error:any,
    isOwner:boolean,
    profile:profileType|null,
    status:string,
    updateStatus:(status:any)=>void
}
const Profile:React.FC<propsType> = ({saveProfile, savePhoto, error, isOwner, profile, status, updateStatus}) => {
  
    
    return (
        <div>
            <ProfileInfo saveProfile={saveProfile} savePhoto={savePhoto} error={error} 
            isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus} />
            <MyPostsContainer />
        </div>


    )
}
export default Profile;