
//const updateNewPostTextMessage = "updateNewPostTextMessage";
const onButtonClickEventMessage = "onButtonClickEventMessage";
type dialogType={
    id:number,
    name: string,
    avatar:string
}
type messageType={
    id:number,
    message:string
}

let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Di",
            avatar: "https://cdn5.vectorstock.com/i/1000x1000/85/39/cartoon-man-icon-vector-14418539.jpg"
        },
        {
            id: 2,
            name: "Vasily",
            avatar: "https://www.vippng.com/png/detail/105-1058737_free-vector-smart-guy-character-vector-characters-png.png"
        },
        {
            id: 3,
            name: "Egor",
            avatar: "https://library.kissclipart.com/20181213/vuw/kissclipart-business-man-cartoon-clipart-businessperson-capita-e980109693cfe80f.jpg "
        },
        {
            id: 4,
            name: "Slav",
            avatar: "https://img1.cgtrader.com/items/2061469/489ac341d8/man-cartoon-3d-model-max--obj-mtl-fbx-ma-mb.jpg"
        },
        {
            id: 5,
            name: "Olga",
            avatar: "https://cdn3.vectorstock.com/i/1000x1000/63/92/school-girl-cartoon-walking-vector-20296392.jpg"
        },
        {
            id: 6,
            name: "Nasty",
            avatar: "https://image.shutterstock.com/image-vector/happy-african-american-girl-cartoon-260nw-522003124.jpg"
        }
    ] as Array<dialogType>,
    messages: [
        {message: "Hi, how are you?", id: 1},
        {message: "Hi, it's wonderful day", id: 2},
        {message: "Hi, can i ask you?", id: 3},
        {message: "Hi, go with me to play football", id: 4},
        {message: "Hi", id: 5},
        {message: "Hi, say your hobby, please", id: 6}
    ] as Array<messageType>

}
export type initialStateType= typeof initialState
const dialogsReducer = (state = initialState, action:any): initialStateType => {
    //let stateCopy={...state, messages:[state.messages]}
    //mogno prosto vynesty let stateCopy kak global a copiyu delat' vnutri action takoi glubiny kakaya est' neobhodimost'
    //let stateCopy
    switch (action.type) {
        case onButtonClickEventMessage:
            let newPost = action.newPostTextInDialogs;
            //stateCopy=
            return {
                ...state,
                messages:[...state.messages,{id: 7, message: newPost}],
                
            };
            // stateCopy.dialogs = [...state.dialogs];
            // stateCopy.messages = [...state.messages];


            // stateCopy.messages.push({id: 7, message: newPost});
            // stateCopy.newPostTextMessage = " ";



        // case updateNewPostTextMessage:
        //     // stateCopy=
        //     return {...state, newPostTextInDialogs : action.body};
        //     //stateCopy.newPostTextMessage = action.newPost;
        // //    return stateCopy
        default:
            return state;
    }
 
}
type onButtonClickEventMessageActionCreatorType={
    type:typeof onButtonClickEventMessage,
    newPostTextInDialogs:string
}
export const onButtonClickEventMessageActionCreator = (newPostTextInDialogs:string):onButtonClickEventMessageActionCreatorType => 
({type: onButtonClickEventMessage, newPostTextInDialogs});
// export const updateNewPostTextMessageActionCreator = (body) => ({type: updateNewPostTextMessage, body});
export default dialogsReducer;