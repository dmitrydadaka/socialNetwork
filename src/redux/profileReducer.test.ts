import { profileType } from "../components/types/types";
import profileReducer, { actions } from "./profileReducer";
/* import React from 'react';
import App from './App'; */
let state = {
    posts: [
        { id: 1, message: "Hi, how are you?", likescount: 23 },
        { id: 2, message: "Hi, it\'s my first day in social network", likescount: 102 },
        { id: 3, message: "slava tebe Boje!", likescount: 114 },
        { id: 4, message: "superrrrrrrrrrrrr", likescount: 596 },
        { id: 5, message: "uraaaaaaaaaaaaa", likescount: 1020 }
    
    ],
    profile: null,
    status: "",
    error: null ,
    newPostText: ""}

test('length posts should be incremented', () => {
    //1 gotovim isxodnye dannye
    let action = actions.onButtonClickEventActionCreator("it-kamasutra.com");

                
       /*  profile: null,
        status: "" */
    
    //action doing
    let newState = profileReducer(state, action);
    //cheking expectation ogidaniya
    expect(newState.posts.length).toBe(6);
});
test('message should be only the same', () => {
    //1 gotovim isxodnye dannye
   
    let action = actions.onButtonClickEventActionCreator("it-kamasutra.com");
  
                
       /*  profile: null,
        status: "" */
    
    //action doing
    let newState = profileReducer(state, action);

    expect(newState.posts[5].message).toBe("it-kamasutra.com");

});
test('after dlelting post should be decrement', () => {
    //1 gotovim isxodnye dannye
   
    let action = actions.deletePostActionCreator(1);

                
       /*  profile: null,
        status: "" */
    
    //action doing
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);

});
test('after delelting post shouldn not be decrement if id dont exist or incoorrect', () => {
    //1 gotovim isxodnye dannye
   
    let action = actions.deletePostActionCreator(1000);

                
       /*  profile: null,
        status: "" */
    
    //action doing
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);

});
