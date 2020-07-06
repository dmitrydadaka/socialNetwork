import { getAuthUserData } from "./authReducer";

const initializedSuccess = "initializedSuccess";


let startState = {
    initialized: false
};
const appReducer = (state = startState, action) => {
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
export const initializedSuccessAC = () =>
    ({ type: initializedSuccess });


export const initializeApp = () => (dispatch) => {
   let promise=dispatch(getAuthUserData());
   //promise.all([promise1,promise2]) esli nesk promisov
   promise.then(() => {(
   dispatch(initializedSuccessAC()));
   }) 
};





export default appReducer;