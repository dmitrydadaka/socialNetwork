import React from "react";
import styles from "./FormControls.module.css";
import { Field } from "redux-form";
export const FormControl = ({ input, meta:{touched, error}, children, ...props }) => {
    const hasError = touched && error;
    return (
        <div>
            <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
                {children}
              {/*   {React.createElement(el, {...input, ...props})}  */}
              {/*   {props.types === "input" ? <input {...input} {...props} /> : <textarea {...input} {...props} />} */}
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const{input,meta, child, ...restprops}=props

    return (<FormControl {...props}  > <textarea {... input} {...restprops}/></FormControl>)


}
export const Input = (props) => {
    const{input,meta, child, ...restprops}=props

    return (<FormControl {...props}  > <input {... input} {...restprops}/></FormControl>)
}

export const createField = (component,  validators, name, placeholder, props={}, text=" ") =>
 (<div>
        <Field component={component}  validate={validators} name={name}
            placeholder={placeholder} {...props} /> {text}
    </div>)

//HOC
/* const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
      <div className={ s.formControl + " " + (hasError ? s.error : "") }>
        <Element {...input} {...props} />
        { hasError && <span> { meta.error } </span> }
      </div>
    );
  };

  const Textarea = Element("textarea"); */


/* export const InputType = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
            <div>
                {props.types=== "input" ? <input {...input} {...props} /> : <textarea {...input} {...props} />}
            </div>
            {hasError && <span className={styles.errorText}>{meta.error}</span>}
        </div>
    )
} */ /* cherez props.types i dobavlenie v fields form svoystva types input ili textarea */
