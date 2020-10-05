import React from "react";
import NavBar from "./NavBar";
import {connect} from "react-redux";
import { appStateType } from "../../redux/reduxStoreNew";
import { avatarsType, initialStateType } from "../../redux/friendsReducer";
import { compose } from "redux";
type mapStateToPropsType={
    
    friendsPage:{avatars:avatarsType[]}

}
type propsType={}
const mapStateToProps=(state:appStateType):mapStateToPropsType=>{

    return {
        friendsPage: state.friendsPage
    }
};

const NavBarContainer=compose<React.ComponentType>(connect<mapStateToPropsType,{},propsType,appStateType>(mapStateToProps))(NavBar);
export default  NavBarContainer;

