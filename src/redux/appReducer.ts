import { getAuthUserData } from "./authReducer";

const initializedSuccess = "initializedSuccess";

/* type initializedSuccessType={
    id:number,
    type: typeof initializedSuccess
  } */

  
let initialState = {
    initialized: null as boolean|null 
};
export type initialStateType = typeof initialState;

const appReducer = (state= initialState, action:initializedSuccessType):initialStateType => {
    switch (action.type) {
        case initializedSuccess:

            return {
                ...state,
                initialized:true

            };

        default:
            return state;
    }
};
type initializedSuccessType={

    type: typeof initializedSuccess//typeOf chtoby ispolzovat' peremennyu dlya izbavleniya ot opechatok
  }
export const initializedSuccessAC = ():initializedSuccessType =>
    ({ type: initializedSuccess });


export const initializeApp = () => (dispatch:any) => {
   let promise=dispatch(getAuthUserData());
   //promise.all([promise1,promise2]) esli nesk promisov
   promise.then(() => {(
   dispatch(initializedSuccessAC()));
   }) 
};





export default appReducer;