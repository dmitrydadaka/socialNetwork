export type postsType = {
    id: number,
    message: string,
    likescount: number
}
export type contactsType={
    github: string|null,
    vk:string|null,
    facebook:string|null,
    instagram: string|null,
    twitter: string|null,
    website: string|null,
    youtube: string|null,
    mainLink: string|null
}
export type photosType = {
    small:string|null,
    large:string|null
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
    id:number|null,
    name:string|null,
    status:string|null,
    photos:photosType,
    followed:boolean
}