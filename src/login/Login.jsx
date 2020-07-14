import React from "react";
import {Field, reduxForm} from "redux-form";
import { Input, createField } from "../components/common/formControls/formControls";
import { required } from "../validators/validators";
import { connect } from "react-redux";
import {login} from "../redux/authReducer";
import {Redirect} from "react-router-dom";
import style from "../components/common/formControls/FormControls.module.css";


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField(Input, [required], "email", "email")}
            {createField(Input, [required], "password", "password", {type:"password"})}
            {createField(Input, [], "rememberMe", null, {type:"checkbox"}, "remember me")}


            {/* <div>
                < Field component={Input}  validate={[required]} name={"email"}
                 placeholder={"email"}/>
            </div>
            <div>
                < Field component={Input} validate={[required]} type={"password"}
                 name={"password"} placeholder={"password"}/>

            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/>
                remember me
            </div> */}
            {error&&<div className={style.formSummaryControl}>
               {error}
            </div>}
            <div>
                <button>login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        //console.log(formData);
        props.login(formData.email, formData.password, formData.rememberMe);
        //na samom dele eto ne sanka. eto callback iz connect, kotoryi vyzyvaet sanky
   
    }
    if(props.isAuth){
       return <Redirect to={"/profile"}/>
    }


    return (
        <div>

            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>

        </div>
    )
}
const mapStateToProps=(state)=>({
    
        isAuth: state.auth.isAuth
    
})

export default connect(mapStateToProps,{login}) (Login);