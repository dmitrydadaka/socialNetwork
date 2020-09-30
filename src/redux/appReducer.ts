import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { getAuthUserData } from "./authReducer";
import { appStateType, InferActionsTypes } from "./reduxStoreNew";

const initializedSuccess = "SN/APP/initializedSuccess";

/* type initializedSuccessType={
    id:number,
    type: typeof initializedSuccess
  } */

  
let initialState = {
    initialized: false  
};
export type initialStateType = typeof initialState;

const appReducer = (state= initialState, action:actionsType):initialStateType => {
    switch (action.type) {
        case "SN/APP/initializedSuccess":

            return {
                ...state,
                initialized:true
            };

        default:
            return state;
    }
};
/* type initializedSuccessType={

    type: typeof initializedSuccess//typeOf chtoby ispolzovat' peremennyu dlya izbavleniya ot opechatok
  } */
 export  const actions={
     initializedSuccessAC : ()=>
    ({ type: "SN/APP/initializedSuccess"}as const) 
  }
  type actionsType=InferActionsTypes<typeof actions>
/* export const initializedSuccessAC = ():initializedSuccessType =>
    ({ type: initializedSuccess }); */

    type thunkType = ThunkAction<void, appStateType, unknown, actionsType>

export const initializeApp = ()=> (dispatch:any) => {
   let promise=dispatch(getAuthUserData());
   //promise.all([promise1,promise2]) esli nesk promisov
   promise.then(() => {(
   dispatch(actions.initializedSuccessAC()));
   }) 
};





export default appReducer;