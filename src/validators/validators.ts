export type fieldValidatorsType=(value:string)=>string|undefined
export const required:fieldValidatorsType=(value)=>{
    if(value) return undefined ;
        return "Field is required";

}
export const maxLengthCreator=(maxLength:number):fieldValidatorsType=>(value)=>{

    if(value.length>maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}
export const minLengthCreator=(minLength:number):fieldValidatorsType=>(value)=>{

    if(value.length<minLength) return `Min length is ${minLength} symbols`;
    return undefined;
}
//export const maxLength=value=>{
//     if(value.length<30)   return "More than  required";
//     return undefined;
// }
// export const minLength=value=>{
//     if(value.length>2) return undefined;
//     return "More is required";
//
// }
// const maxLength = max => value =>
//     value && value.length > max ? `Must be ${max} characters or less` : undefined
// export const maxLength15 = maxLength(15)
// const minLength = min => value =>
//     value && value.length < min ? `Must be ${min} characters or more` : undefined
// export const minLength2 = minLength(2)