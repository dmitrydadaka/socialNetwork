import {connect} from "react-redux";
import React, { ComponentType } from "react"
import { compose } from "redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
};

todo;


function A<T extends { name: string }>(e: T) {
    e.name

}
A({ name: "sss", age: 15 })
type typeName = {
    name: string
}
const a: typeName = { name: "sss" }
function HOC1<WP extends { hip: number }>(WrappedComponent: React.ComponentType<WP>) {
    let Container: React.FC<Omit<WP, "hip">> = (props) => {
        return (<div>
            <WrappedComponent {...props as WP} hip={10} />
        </div>)

    }
    return Container
}
function HOC2<WP extends { dance: number }>(WrappedComponent: React.ComponentType<WP>) {
    let Container: React.FC<Omit<WP, "dance">> = (props) => {
        return (<div>
            <WrappedComponent {...props as WP} dance={10} />
        </div>)

    }
    return Container
}
type C1PropsType = {
    age: number
    title: string
    hip: number
        
}
type MapPropsType = {
       
    
    dance: number
    
}
type C1ParamsType={
    userId:string
}
const C1: React.FC<C1PropsType&MapPropsType&RouteComponentProps<C1ParamsType>> = (props) => {
    props.match.params.userId
    return <div>{props.title}</div>
}

/* const C1Container=HOC1(C1)
const C1Container2=HOC2(C1Container) */
type HOC1PropType = Omit<C1PropsType, "hip">
type HOC1Type = ComponentType<HOC1PropType>
type HOC2Type = ComponentType<Omit<HOC1PropType, "dance">>
//const ProverkaHOC: HOC2Type
//const SuperHoc = compose<HOC1Type, ComponentType<C1PropsType>, HOC2Type>(HOC2, HOC1)
//const C1Container2 = SuperHoc(C1)
/* const App2 = () => {

    return (
       // <ProverkaHOC/>

        <C1Container2 title={"it-kamasutra"} age={19} />)
} */
let mstp=(state:any)=>{
    return{
    dance:12,
    }
}

const C1Connect=connect(mstp)(C1)
//const C1ConnectWithRouter_=withRouter(C1Connect)
const ConnectedWithCompose=compose<ComponentType<Omit<C1PropsType,"hip">> >(withRouter,connect(mstp), HOC1)(C1)
const App = () => {

    return (
       // <ProverkaHOC/>

        <ConnectedWithCompose title={"it-kamasutra"} age={19} />)
}