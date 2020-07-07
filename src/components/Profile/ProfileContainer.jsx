import React from "react";
import Profile from "./Profile";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authUserId
        } if(!userId){this.props.history.push("/login")}
        //axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
        //
        this.props.getUserProfile(userId);
        // setTimeout(()=>{
        this.props.getStatus(userId);
        // }, 1000)


    }

    render() {
        //console.log("component render")

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
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


let mapStateToProps = (state) =>{
//console.log("mapStateToProps render");
   return ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId:state.auth.userId,
    isAuth:state.auth.isAuth

})};
// let withUrlDataContainerComponent=withRouter(AuthRedirectComponent);

export default compose(connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus
}), withRouter)(ProfileContainer);
;