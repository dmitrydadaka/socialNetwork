import React from "react";
import NavBar from "./NavBar";
import {connect} from "react-redux";
import { appStateType } from "../../redux/reduxStoreNew";
import { avatarsType, initialStateType } from "../../redux/friendsReducer";
import { compose } from "redux";
export type mapStateToPropsNavbarType={
    
    friendsPage:{avatars:avatarsType[]}

}
type propsType={}
const mapStateToProps=(state:appStateType):mapStateToPropsNavbarType=>{

    return {
        friendsPage: state.friendsPage
    }
};

const NavBarContainer=compose<React.ComponentType>(connect<mapStateToPropsNavbarType,{},propsType,appStateType>(mapStateToProps))(NavBar);
export default  NavBarContainer;

