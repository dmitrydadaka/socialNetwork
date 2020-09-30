import React from "react";
import Profile from "./Profile";
import { getStatus, getUserProfile, updateStatus, savePhoto, saveProfile } from "../../redux/profileReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { appStateType } from "../../redux/reduxStoreNew";
import { profileType } from "../types/types";
//import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type mapDispatchToPropsType={
    
    getUserProfile:(userId:number)=>void,
    getStatus:(status:string)=>{},
    updateStatus:(status:string)=>{},
    savePhoto:()=>void,
    saveProfile:(formData:any) => Promise<any>

}
type ownPropsType={
    match:any,
    history:any,
    authUserId:any,
    profile:profileType,
    status:string,
    error:any


}
type propsType=mapDispatchToPropsType&ownPropsType
class ProfileContainer extends React.Component <propsType> {
    refreshMethod() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authUserId
        } if (!userId) { this.props.history.push("/login") }
        //axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
        //
        this.props.getUserProfile(userId);
        // setTimeout(()=>{
        this.props.getStatus(userId);
        // }, 1000)
    }
    componentDidMount() {

        this.refreshMethod();


    }
    componentDidUpdate(prevProps:any, prevState:any, snapshot:any) {
        //na luboi chih update, poetomu stavim uslovie
        if (this.props.match.params.userId != prevProps.match.params.userId)
         { this.refreshMethod() }
    }



    render() {
        //console.log("component render")

        return (
            <Profile savePhoto={this.props.savePhoto}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                saveProfile={this.props.saveProfile}
                error={this.props.error} />
        )
    }
}

// let AuthRedirectComponent=withAuthRedirect(ProfileContainer);

// let mapStateToPropsForRedirect=(state)=>({
//     isAuth:state.auth.isAuth
// });
// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);

// (props)=>{
// if(!this.props.isAuth) return <Redirect to={"/login"}/>
//
// return <ProfileContainer {...props}/>}


let mapStateToProps = (state:appStateType) => {
    //console.log("mapStateToProps render");
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
        error: state.profilePage.error 


    })
};
// let withUrlDataContainerComponent=withRouter(AuthRedirectComponent);

export default compose(connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile
}), withRouter)(ProfileContainer);
;