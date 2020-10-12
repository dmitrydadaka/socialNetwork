import React from "react";
import Header, { dPtype, mstpType } from "./Header";
import {logout} from "../../redux/authReducer";
import {connect} from "react-redux";
import { appStateType } from "../../redux/reduxStoreNew";

class HeaderContainer extends React.Component<mstpType&dPtype> {
    
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps=(state:appStateType)=>({
    isAuth:state.auth.isAuth,
    login:state.auth.login

}as mstpType);

export default connect<mstpType, dPtype,{},appStateType>(mapStateToProps, {logout})(HeaderContainer);