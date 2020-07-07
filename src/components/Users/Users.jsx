import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User"


let Users = (props) => {
   

    return (
        <div>
            <div>
                <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} 
                currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
            </div>   
            {props.users.map(u => <User user={u} key={u.id} followingInProgress={props.followingInProgress}
             Follow={props.Follow} unFollow={props.unFollow} />)}
                
        </div>)

}
export default Users;