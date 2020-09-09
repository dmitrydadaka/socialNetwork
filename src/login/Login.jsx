import React from "react";
import { reduxForm } from "redux-form";
import { Input, createField } from "../components/common/formControls/formControls";
import { required } from "../validators/validators";
import { connect } from "react-redux";
import { login, getCaptchaUrl } from "../redux/authReducer";
import { Redirect } from "react-router-dom";
import style from "../components/common/formControls/FormControls.module.css";


const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    debugger
    return (
        <form onSubmit={handleSubmit}>
            {createField(Input, [required], "email", "email")}
            {createField(Input, [required], "password", "password", { type: "password" })}
            {createField(Input, [], "rememberMe", null, { type: "checkbox" }, "remember me")}


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
            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && createField(Input, [required], "captcha",  "symbols from image", { })}

            {error && <div className={style.formSummaryControl}>
                {error}
            </div>}
            <div>
                <button >login</button>
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
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
        //na samom dele eto ne sanka. eto callback iz connect, kotoryi vyzyvaet sanky

    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }


    return (
        <div>

            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />

        </div>
    )
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,

    isAuth: state.auth.isAuth

})

export default connect(mapStateToProps, { login, getCaptchaUrl })(Login);