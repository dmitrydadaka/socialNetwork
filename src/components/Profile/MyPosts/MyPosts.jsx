import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { MyPostsReduxForm } from "../MyPostsForm/MyPostsForm";
import { reset } from 'redux-form'
import { render } from "@testing-library/react";

//window.props=[];
const MyPosts=React.memo(props=>  {
    /* window.props.push(props);
    console.log("render");
    console.log(props); */


    //let newPost = React.createRef();
    // let onButton = () => {
    //     props.onButtonClick();
    //     // eslint-disable-next-line no-undef
    //     // props.dispatch(onButtonClickEventActionCreator());
    //
    // }
    //
    // let onPostChange = (e) => {
    //     // let text = newPost.current.value;
    //     let text = e.target.value;
    //     props.updateNewPostText(text);
    //     // let action=updateNewPostTextActionCreator(text);
    //     // props.dispatch(action);
    // }
    //
    // let newPostText = props.newPostText;
    /* componentDidUpdate() {
        console.log("componentDidUpdate")
    } */
  /*   componentDidMount (){
        setTimeout(()=>{
            this.setState({a:12})
        },3000)

    } */
   /*  shouldComponentUpdate(nextProps,nextState){
      return  nextProps !=this.props || nextState!=this.state 

    }  */

    
        console.log("render");
        console.log(props);

        let postsElements = [...props.posts].reverse().map(p => <Post message={p.message} key={p.id} likescount={p.likescount} />);
        let addNewPostText = (value, dispatch) => {
            props.onButtonClick(value.newPostText);
            dispatch(reset('MyPostsForm'))
        }

        
        return (

            <div className={s.postsBlock}>
                <div><h3> My post </h3>
                    <div>
                        <MyPostsReduxForm onSubmit={addNewPostText} {...props} />
                    </div>
                    {/*<div>*/}
                    {/*    <textarea onChange={onPostChange} placeholder={"enter svoi posty"} value={newPostText}/>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <button onClick={onButton}>Add post</button>*/}
                    {/*</div>*/}

                </div>
                <div className={s.posts}>
                    {postsElements}


                </div>
            </div>

        )
    }
)
// function MyPostsForm (props) {
//
//     //let newPost = React.createRef();
//
//     // let onButton = () => {
//     //     props.onButtonClick();
//     // eslint-disable-next-line no-undef
//     // props.dispatch(onButtonClickEventActionCreator());    }
//     //let onPostChange = (e) => {
//     //     // let text = newPost.current.value;
//     //     let text = e.target.value;
//     //     props.updateNewPostText(text);
//     //     // let action=updateNewPostTextActionCreator(text);
//     //     // props.dispatch(action);
//     // }
//     // let newPostText = props.newPostText;
//     return (
//
//         <form onSubmit={props.handleSubmit} >
//             <div>
//                 < Field   name={"newPostText"} component={"textarea"}
//                           placeholder={"Enter your post"} validate={[required, maxLength]} typeField={textareaForm}/>
//             </div>
//
//             <div>
//                 <button >Press</button>
//             </div>
//         </form>
//     )
// }
// const MyPostsReduxForm=reduxForm({
//     // a unique name for the form
//     form: 'MyPostsForm'
// })(MyPostsForm);
export default MyPosts;