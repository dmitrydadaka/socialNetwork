import React, {Suspense} from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
//import Preloader from "../components/common/Preloader/Preloader";

/* let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"} />
            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent; */
    export const withSuspense = (Component) => {

        return (props) =>(<Suspense>
         <Component {...props}/>
         </Suspense> )
                
                
        
        }
    