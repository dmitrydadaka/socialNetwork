let initialState={
    avatars: [
        {
            id: 1,
            name: "Dima",
            avatar: "https://cdn5.vectorstock.com/i/1000x1000/85/39/cartoon-man-icon-vector-14418539.jpg"
        },
        {
            id: 2,
            name: "Vasya",
            avatar: "https://www.vippng.com/png/detail/105-1058737_free-vector-smart-guy-character-vector-characters-png.png"
        },
        {
            id: 3,
            name: "Egorka",
            avatar: "https://library.kissclipart.com/20181213/vuw/kissclipart-business-man-cartoon-clipart-businessperson-capita-e980109693cfe80f.jpg "
        }

    ]as Array <avatarsType>
}

 export type avatarsType={
    id:number,
    name:string,
    avatar: string

}
export type initialStateType=typeof initialState
const friendsReducer=(state=initialState):initialStateType=>{
    return state;
}
export default friendsReducer;