import React from "react";
import Profile from "./Profile";
import { getStatus, getUserProfile, updateStatus, savePhoto, saveProfile } from "../../redux/profileReducer";
import { connect } from "react-redux";
import { withRouter,RouteComponentProps } from "react-router-dom";
import { compose } from "redux";
import { appStateType } from "../../redux/reduxStoreNew";
import { profileType } from "../types/types";
//import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type mapDispatchToPropsType={
    
    getUserProfile:(userId:number)=>void,
    getStatus:(userId:number)=>{},
    updateStatus:(status:string)=>{},
    savePhoto:(file:File)=>void,
    saveProfile:(profile:profileType) => Promise<any>

}
 type pathParamType={
    userId:string
    /* authUserId:any,
    profile:profileType,
    status:string,
    error:any */


} 
type withRouterType=RouteComponentProps<pathParamType>
type mapStateToPropsType=ReturnType<typeof mapStateToProps>
type propsType=mapDispatchToPropsType&mapStateToPropsType&withRouterType
class ProfileContainer extends React.Component <propsType> {
    constructor(props: propsType) {
        super(props);
    }

    refreshMethod() {
        let userId:number|null = +this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authUserId
        } if (!userId) { this.props.history.push("/login") }
        //axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
        //
        if(!userId){
            console.log("ID should exists in URI params or in state ('authorizedUserId')")
        }
        else{
        this.props.getUserProfile(userId);
        
        this.props.getStatus(userId)}
           }
    componentDidMount() {

        this.refreshMethod();


    }
    componentDidUpdate(prevProps:propsType, prevState:propsType) {
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

export default compose<React.ComponentType>(connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile
}), withRouter)(ProfileContainer);
;