import React, { Component,Suspense } from 'react';
import "./App.css";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { HashRouter, Route, withRouter } from "react-router-dom";
import Friends from "./components/Friends/Friends";
/* import DialogsContainer from "./components/Dialogs/DialogsContainer";
 */import NavBarContainer from "./components/NavBar/NavBarContainer";
import UsersContainer from "./components/Users/UsersContainer";
/* import ProfileContainer from "./components/Profile/ProfileContainer";
 */import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./login/Login";
import { connect, Provider } from 'react-redux';
import { initializeApp } from "./redux/appReducer";
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from "./redux/reduxStoreNew";
import { withSuspense } from './hoc/withAuthRedirect';


const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends Component {

    componentDidMount() {
        //axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true})

        // authAPI.me()
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             let {id, email, login} = response.data.data;
        //             this.props.setAuthUserData(id, email, login);
        //         }
        //     })
        this.props.initializeApp();
    }

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

                    <Suspense fallback={<Preloader/>}>
                        <Route path={"/profile/:userId?"} render={() => <ProfileContainer />} />
                        <Route path={"/dialogs"} render={() => <DialogsContainer />} />
                        <Route path={"/users"} render={()=> <UsersContainer/>} />

                    </Suspense>
                    {/* <Route path={"/profile/:userId?"} render={() => <ProfileContainer />} />
                    <Route path={"/dialogs"} render={() => <DialogsContainer />} /> */}
                    <Route path={"/news"} render={() => <News />} />
                    <Route path={"/music"} render={() => <Music />} />
                    <Route path={"/settings"} render={() => <Settings />} />
                    {/*  */}<Route path={"/users"} render={() => <UsersContainer />} />
                    <Route path={"/login"} render={withSuspense(LoginPage)} />


{/*                     <Route path={"/login"} render={() => <LoginPage />} />
 */}
                    <Route path={"/friends"} render={() => <Friends />} />
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
    connect(mapStateToProps, { initializeApp }))(App);

const AppReactSamuraiJS = (props) => {
    return (
        <HashRouter >
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>)
}
export default AppReactSamuraiJS;