import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "../Users/User"
import { userType } from "../types/types";
import {SideBarFormValuesType, SideBarReduxForm} from "./SideBarForm"
import { reset } from "redux-form";

export type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    users: Array<userType>,
    Follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    followingInProgress: Array<number>,
    term: string,
    friend: boolean,
    getUsers:(currentPage:number, pageSize:number,term:string,friend:boolean)=>void,
    toGetTerm:(term:string)=>void

    //toGetTerm:(term:string)=>void

}

let SideBar: React.FC<PropsType> = ({ totalUsersCount, pageSize, currentPage = 1, onPageChanged, users, term, friend, getUsers, toGetTerm, ...props }) => {
    //let newPost = React.createRef();
    // let onButton = () => {
    //     props.onButtonClick();
    //     // eslint-disable-next-line no-undef
    //     // props.dispatch(onButtonClickEventActionCreator());
    //
    // }
    //
    // let onPostChange = (e) => {
    //     // let text = newPost.current.value;
    //     let text = e.target.value;
    //     props.updateNewPostText(text);
    //     // let action=updateNewPostTextActionCreator(text);
    //     // props.dispatch(action);
    // }
    //
    // let newPostText = props.newPostText;
    /* componentDidUpdate() {
        console.log("componentDidUpdate")
    } */

    let addNewPost = (value:SideBarFormValuesType, dispatch:any) => {
        toGetTerm(value.term);
       // dispatch(reset('SideBarForm'))
    }
    return (
        <div>
            <div><SideBarReduxForm onSubmit={addNewPost} />
                {/* <div>
                    <textarea onChange={onPostChange} placeholder={"enter svoi posty"} value={newPostText} />
                    </div>
                <div>
                    <button onClick={onButton}>Add post</button>
                </div> */}
            </div>
            <div>
                <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
                    currentPage={currentPage} onPageChanged={onPageChanged} />
            </div>
            {users.map(u => <User user={u} key={u.id} followingInProgress={props.followingInProgress}
                Follow={props.Follow} unFollow={props.unFollow} />).filter(friend=>friend?props.unFollow:0)}


        </div>)

}
export default SideBar;