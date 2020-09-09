import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User"
import { userType } from "../types/types";


type PropsType={
totalUsersCount:number,
pageSize:number,
currentPage:number,
onPageChanged:(pageNumber:number)=>void,
users:Array<userType>,
Follow:(userId:number)=>void,
unFollow:(userId:number)=>void,
followingInProgress:Array<number>
}

let Users:React.FC<PropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props}) => {
   

    return (
        <div>
            <div>
                <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} 
                currentPage={currentPage} onPageChanged={onPageChanged} />
            </div>   
            {users.map(u => <User user={u} key={u.id} followingInProgress={props.followingInProgress}
             Follow={props.Follow} unFollow={props.unFollow} />)}
                
        </div>)

}
export default Users;