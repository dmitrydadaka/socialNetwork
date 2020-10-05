import React, { Suspense } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Preloader from "../components/common/Preloader/Preloader";
import { avatarsType } from "../redux/friendsReducer";
import { appStateType } from "../redux/reduxStoreNew";

type mstpType={
    isAuth:boolean
}
type mdtpType={
    
}
let mapStateToPropsForRedirect = (state:appStateType):mstpType => ({
    isAuth: state.auth.isAuth
});

export function withAuthRedirect <WCP> (WrappedComponent:React.ComponentType<WCP>)  {

    const RedirectComponent:React.FC <mstpType> = (props)=> {

        let {isAuth,  ...restprops}=props

            if (!isAuth) return <Redirect to={"/login"} />
            return <WrappedComponent {...restprops  as WCP} />
        
    }

    let ConnectedAuthRedirectComponent = connect<mstpType,{},WCP,appStateType>(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}

export function withSuspense<WC>(WrappedComponent: React.ComponentType<WC>) {

        return (props: WC) =>{ 
            return  <Suspense fallback={<div>loading...</div>}>
         <WrappedComponent {...props}/>
         </Suspense > }            
                
        
        }
