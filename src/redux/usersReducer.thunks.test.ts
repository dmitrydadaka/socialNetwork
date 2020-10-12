import { Follow } from "./usersReducer"
import {UsersAPI} from "./../API/userApi"
import {responseType, resultCodesEnum} from "./../API/api"
jest.mock("./../API/userApi")
const userApiMock=UsersAPI

const result:responseType={
    data:{},
    messages:[],
    resultCode:resultCodesEnum.Success
}
//@ts-ignore
userApiMock.followFriends.mockReturnValue(result)
test("",async()=>{
const thunk=Follow(1)
const dispatchMock=jest.fn()
//@ts-ignore
await thunk(dispatchMock)
expect(dispatchMock).toBeCalledTimes(3)
})