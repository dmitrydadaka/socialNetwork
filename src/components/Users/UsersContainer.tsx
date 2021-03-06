import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {Follow, getUsers} from "../../redux/usersReducer";
import {unFollow} from "../../redux/usersReducer";
import {compose} from "redux";
import {getFollowingInProgress, getIsFetching, getTotalUsersCount, getCurrentPage, getPageSize, getUsersSuperSelector} from "../../redux/usersSelectors";
import {userType } from "../types/types";
import { appStateType } from "../../redux/reduxStoreNew";
import SideBar from "../sideBar/sideBar";
type mapStateToPropsType={
    currentPage:number,
    pageSize:number,
    isFetching:boolean,
    totalUsersCount:number,
    users: Array<userType>,    
    followingInProgress:Array<number>,
    term:string
    friend:boolean
}
type mapDispatchToPropsType={
    Follow:(userId:number)=>{},
    unFollow:(userId:number)=>{},
    getUsers:(currentPage:number, pageSize:number, term:string, friend:boolean)=>void

}

//type propsType=mapDispatchToPropsType&mapStateToPropsType
class UsersContainer extends React.Component <mapDispatchToPropsType&mapStateToPropsType> {
    // constructor(props) {po ymolchaniuy pishetsya reactcomponent, kotoryi my nasledyem rashiryaem
    //     super(props);konstruktor po ymolchaniyu cosdaetsya
    // }


    componentDidMount(){
        // this.props.toggleIsFetching(true);
        // alert("new")
        // getUsers=()=>  {
        //     if(this.props.users.length===0) {
        //   y Dimy zdec' toge zapros na servac

        // UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // })
        const {currentPage, pageSize,term, friend}=this.props;
        this.props.getUsers(currentPage, pageSize, term,friend);
    }

    onPageChanged = (pageNumber:number) => {
        const {pageSize, term, friend}=this.props
        this.props.getUsers(pageNumber, pageSize,term, friend);

        
        // this.props.toggleIsFetching(true);
        //
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        // //     {withCredentials: true})
        // UsersAPI.getUsers
        // (pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        // })

    }


    render() {
/* console.log("Users")
 */        return (<>
               {/*  {this.props.isFetching ? <Preloader/> : null} */}
              {/*  <h2>{this.props.pageTitle}</h2> */}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       Follow={this.props.Follow}
                       unFollow={this.props.unFollow}
                       followingInProgress={this.props.followingInProgress}
                       term={this.props.term}
                       friend={this.props.friend}
                />
                 

            </>

        )
    }
}

const mapStateToProps = (state:appStateType):mapStateToPropsType => {
/*     console.log("mapStateToProps Users")
 */    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollowingInProgress(state),
        term:state.usersPage.term,
        friend:state.usersPage.friend
    }
}
/* const mapDispatchToProps = (dispatch:any) => {
    return {
         Follow: (userId:number) => {
             dispatch(Follow(userId));
         },
         unFollow: (userId:number) => {
             dispatch(unFollow(userId))
         },
         getUsers: (currentPage:number, pageSize:number) => {
             dispatch(getUsers(currentPage, pageSize))
         }
      
    }
 } */


// export default connect(mapStateToProps,
//     {
//         Follow: followAC,
//         unFollow: unFollowAC,
//         setUsers: setUsersAC,
//         setCurrentPage: setCurrentPageAC,
//         setTotalUsersCount: setTotalUsersCountAC,
//         toggleIsFetching: toggleIsFetchingAC
//     })(UsersContainer);
//let withRedirect=withAuthRedirect(UsersContainer)
// export default withAuthRedirect(connect(mapStateToProps,
//     {
//         Follow,
//         unFollow,
//         getUsers
//     })(UsersContainer));
export default compose<React.ComponentType>(connect<mapStateToPropsType,mapDispatchToPropsType,{},appStateType>(mapStateToProps,
    {
        Follow,
        unFollow,
        getUsers
    }))(UsersContainer);