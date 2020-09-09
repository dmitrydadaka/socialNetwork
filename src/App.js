import React, { Component, Suspense } from 'react';
import "./App.css";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route, withRouter, Switch, Redirect } from "react-router-dom";
import Friends from "./components/Friends/Friends";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./login/Login";
import { connect, Provider } from 'react-redux';
import { initializeApp } from "./redux/appReducer";
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from "./redux/reduxStoreNew";
import { withSuspense } from './hoc/withAuthRedirect';


const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends Component {
   /*  catchAllUnhandledErrors = (promise,reason) => {
        alert("Some error occured");
    } */
    componentDidMount() {

        this.props.initializeApp();
       // window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
   /*  componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    } */
    

    render() {
        if (!this.props.initialized) {
            return <Preloader />

        }

        return (

            <div className={"app-wrapper"}>
                {/*  <Redirect from="/" to ="/login"/> */}
                <HeaderContainer />
                <NavBarContainer />
                <div className={"app-wrapper-content"}>
                    {/* <Route exact path='/'
                               render={() => <Redirect to={"/profile"}/>}/> */}


                    <Suspense fallback={<Preloader />}>
                        
                            <Route path={"/dialogs"} render={() => <DialogsContainer />} />

                            <Route path={"/profile/:userId?"} render={() => <ProfileContainer />} />
                            <Route path={"/dialogs"} render={() => <DialogsContainer />} />
                            <Route path={"/users"} render={() => <UsersContainer pageTitle={"samurai"} />} />

                    </Suspense>
                    <Switch>
                             <Route exact path={"/"} render={() => <Redirect to="/profile"/>}/>
                           {/*  <Redirect from="/" to={"/profile"}/> */}
                            <Route path={"/news"} render={() => <News />} />

                            <Route path={"/music"} render={() => <Music />} />
                            <Route path={"/settings"} render={() => <Settings />} />
                            <Route path={"/users"} render={() => <UsersContainer />} />
{/*                             <Route path={"/login/facebook"} render={() => <div>facebook</div>} />
 */}
                            <Route path={"/login"} render={withSuspense(Login)} />
                            <Route path={"*"} render={() => <div>404 not found</div>} />

                            <Route path={"/friends"} render={() => <Friends />} />
                        </Switch>
                </div>
                </div>
        )
    }
}
const mapStateToProps = (state) => ({
                    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp}))(App);

const AppReactSamuraiJS = (props) => {
    return (
                <BrowserRouter >
                    <Provider store={store}>
                        <AppContainer />
                    </Provider>
                </BrowserRouter>)
}
export default AppReactSamuraiJS;