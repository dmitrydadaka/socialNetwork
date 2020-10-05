export type postsType = {
    id: number,
    message: string,
    likescount: number
}
export type contactsType={
    github: string,
    vk:string,
    facebook:string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}
export type photosType = {
    small:string,
    large:string
}
export type profileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: contactsType,
    photos:photosType,
    aboutMe:any 

}
export type userType={
    id:number,
    name:string,
    status:string,
    photos:photosType,
    followed:boolean
}