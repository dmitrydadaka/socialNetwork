// import profileReducer from "./profileReducer";
// import dialogsReducer from "./dialogsReducer";
// import friendsReducer from "./friendsReducer";
//
// const updateNewPostText = "updateNewPostText";
// const onButtonClickEvent = "onButtonClickEvent";
// const updateNewPostTextMessage = "updateNewPostTextMessage";
// const onButtonClickEventMessage = "onButtonClickEventMessage";
// let store = {
//     _callSubscriber() {
//         console.log("state changed")
//     },
//
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: "Hi, how are you?", likescount: 23},
//                 {id: 2, message: "Hi, it\'s my first day in social network", likescount: 102},
//                 {id: 3, message: "slava tebe Boje!", likescount: 114},
//                 {id: 4, message: "superrrrrrrrrrrrr", likescount: 596},
//                 {id: 5, message: "uraaaaaaaaaaaaa", likescount: 1020}
//
//             ],
//
//             newPostText: "it-kamasutra.com"
//         },
//         dialogsPage: {
//             dialogs: [
//                 {
//                     id: 1,
//                     name: "Di",
//                     avatar: "https://cdn5.vectorstock.com/i/1000x1000/85/39/cartoon-man-icon-vector-14418539.jpg"
//                 },
//                 {
//                     id: 2,
//                     name: "Vasily",
//                     avatar: "https://www.vippng.com/png/detail/105-1058737_free-vector-smart-guy-character-vector-characters-png.png"
//                 },
//                 {
//                     id: 3,
//                     name: "Egor",
//                     avatar: "https://library.kissclipart.com/20181213/vuw/kissclipart-business-man-cartoon-clipart-businessperson-capita-e980109693cfe80f.jpg "
//                 },
//                 {
//                     id: 4,
//                     name: "Slav",
//                     avatar: "https://img1.cgtrader.com/items/2061469/489ac341d8/man-cartoon-3d-model-max--obj-mtl-fbx-ma-mb.jpg"
//                 },
//                 {
//                     id: 5,
//                     name: "Olga",
//                     avatar: "https://cdn3.vectorstock.com/i/1000x1000/63/92/school-girl-cartoon-walking-vector-20296392.jpg"
//                 },
//                 {
//                     id: 6,
//                     name: "Nasty",
//                     avatar: "https://image.shutterstock.com/image-vector/happy-african-american-girl-cartoon-260nw-522003124.jpg"
//                 }
//             ],
//             messages: [
//                 {message: "Hi, how are you?", id: 1},
//                 {message: "Hi, it's wonderful day", id: 2},
//                 {message: "Hi, can i ask you?", id: 3},
//                 {message: "Hi, go with me to play football", id: 4},
//                 {message: "Hi", id: 5},
//                 {message: "Hi, say your hobby, please", id: 6}
//             ],
//
//             newPostTextMessage: "it-kamasutra.com",
//         },
//
//
//         friendsPage: {
//             avatars: [
//                 {
//                     id: 1,
//                     name: "Dima",
//                     avatar: "https://cdn5.vectorstock.com/i/1000x1000/85/39/cartoon-man-icon-vector-14418539.jpg"
//                 },
//                 {
//                     id: 2,
//                     name: "Vasya",
//                     avatar: "https://www.vippng.com/png/detail/105-1058737_free-vector-smart-guy-character-vector-characters-png.png"
//                 },
//                 {
//                     id: 3,
//                     name: "Egorka",
//                     avatar: "https://library.kissclipart.com/20181213/vuw/kissclipart-business-man-cartoon-clipart-businessperson-capita-e980109693cfe80f.jpg "
//                 }
//
//             ]
//
//         }
//
//
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.friendsPage = friendsReducer(this._state.friendsPage, action);
//         this._callSubscriber(this._state);
//     },
//
//
//     subscribe(observer) {
//         (
//             this._callSubscriber = observer
//         )
//     }
//
//
// }
//
//
//
// export default store;
//
// window.store = store;