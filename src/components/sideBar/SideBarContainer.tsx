import React from "react";
import {connect} from "react-redux";
import {Follow, getUsers, actions} from "../../redux/usersReducer";
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
    term:string,
    friend:boolean
}
type mapDispatchToPropsType={
    Follow:(userId:number)=>{},
    unFollow:(userId:number)=>{},
    getUsers:(currentPage:number, pageSize:number,term:string,friend:boolean)=>void,
    toGetTerm:(term:string)=>void

}

//type propsType=mapDispatchToPropsType&mapStateToPropsType
class SideBarContainer extends React.Component <mapDispatchToPropsType&mapStateToPropsType> {
    // constructor(props) {po ymolchaniuy pishetsya reactcomponent, kotoryi my nasledyem rashiryaem
    //     super(props);konstruktor po ymolchaniyu cosdaetsya
    // }


    componentDidMount(){
       
        
        const {currentPage, pageSize, term, friend}=this.props;
        this.props.getUsers(currentPage, pageSize,term, friend);
    }

    onPageChanged = (pageNumber:number) => {
        const {pageSize, term, friend}=this.props
        this.props.getUsers(pageNumber, pageSize,term,friend);

        
      
    }


    render() {
/* console.log("Users")
 */        return (<>
               {/*  {this.props.isFetching ? <Preloader/> : null} */}
              {/*  <h2>{this.props.pageTitle}</h2> */}
                <SideBar totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       Follow={this.props.Follow}
                       unFollow={this.props.unFollow}
                       followingInProgress={this.props.followingInProgress}
                       term={this.props.term}
                       friend={this.props.friend}
                       getUsers={this.props.getUsers}
                       toGetTerm={this.props.toGetTerm}
                       
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


export default compose<React.ComponentType>(connect<mapStateToPropsType,mapDispatchToPropsType,{},appStateType>(mapStateToProps,
    {
        Follow,
        unFollow,
        getUsers,
        toGetTerm:actions.toGetTerm
    }))(SideBarContainer);