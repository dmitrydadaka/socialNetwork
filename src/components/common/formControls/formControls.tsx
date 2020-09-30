import React from "react";
import styles from "./FormControls.module.css";
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";
import { fieldValidatorsType } from "../../../validators/validators";
type propsType = {
    
    meta: WrappedFieldMetaProps

}
type metaType = {
    touched: any,
    error: any
}
export const FormControl: React.FC<propsType> = ({  meta: { touched, error }, children }) => {
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


export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, children, ...restprops } = props

    return (<FormControl {...props}  > <textarea {...input} {...restprops} /></FormControl>)


}
export const Input: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, children, ...restprops } = props

    return (<FormControl {...props}  > <input {...input} {...restprops} /></FormControl>)
}
/* type createFieldType={
    component:any,
    validators:number,
    name:string,
    placeholder:string
} */

export function createField<formKeysType extends string> (component:React.FC<WrappedFieldProps>, 
    validators: Array<fieldValidatorsType>,
     name: formKeysType, placeholder: string|undefined, props = {}, text = " ") {
   return (<div>
        <Field component={component} validate={validators} name={name}
            placeholder={placeholder} {...props} /> {text}
    </div>)}

export type GetStringKeys<T> = Extract<keyof T, string>


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
