import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { Input, createField, GetStringKeys } from "../components/common/formControls/formControls";
import { required } from "../validators/validators";
import { connect } from "react-redux";
import { login} from "../redux/authReducer";
import { Redirect } from "react-router-dom";
import style from "../components/common/formControls/FormControls.module.css";
import { appStateType } from "../redux/reduxStoreNew";
type loginFormOwnProps={
    captchaUrl:string|null
}

const LoginForm:React.FC<InjectedFormProps<loginValuesType,loginFormOwnProps>&loginFormOwnProps> = ({ handleSubmit, error, captchaUrl }) => {
    
    return (
        <form onSubmit={handleSubmit}>
            {createField<loginValuesTypeKeys>(Input, [required], "email", "email")}
            {createField<loginValuesTypeKeys>(Input, [required], "password", "password", { type: "password" })}
            {createField<loginValuesTypeKeys>(Input, [], "rememberMe", undefined, { type: "checkbox" }, "remember me")}


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
            {captchaUrl && createField<loginValuesTypeKeys>(Input, [required], "captcha",  "symbols from image", { })}

            {error && <div className={style.formSummaryControl}>
                {error}
            </div>}
            <div>
                <button >login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<loginValuesType,loginFormOwnProps>({
    // a unique name for the form
    form: 'login'
})(LoginForm);


type mapStateToPropsType={
    captchaUrl:string|null
    isAuth:boolean
}
type mapDispatchToPropsType={
  login:(email:string, password:string, rememberMe:boolean, captcha:string)=>void
}
export type loginValuesType={
    email:string, password:string, rememberMe:boolean, captcha:string
}
//type loginValuesTypeKeys= Extract<keyof loginValuesType, string>
export type loginValuesTypeKeys = GetStringKeys<loginValuesType>

const Login:React.FC<mapStateToPropsType&mapDispatchToPropsType> = (props) => {

    const onSubmit = (formData:any) => {
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
const mapStateToProps = (state:appStateType):mapStateToPropsType => ({
    captchaUrl: state.auth.captchaUrl,

    isAuth: state.auth.isAuth

})
//@ts-ignore

export default connect(mapStateToProps, { login })(Login)