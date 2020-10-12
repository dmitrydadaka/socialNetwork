import { userType } from "../components/types/types"
import usersReducer, { actions, initialStateType } from "./usersReducer"
let state : initialStateType
beforeEach(
    () => {
        state = {
            users: [
                {
                    id: 0,
                    name: "Ziva",
                    status: "",
                    photos: { small: "", large: "" },
                    followed: false
                },
                {
                    id: 1,
                    name: "Z",
                    status: "",
                    photos: { small: "", large: "" },
                    followed: false
                },
                {
                    id: 2,
                    name: "Zi",
                    status: "",
                    photos: { small: "", large: "" },
                    followed: true
                },
                {
                    id: 3,
                    name: "Ziv",
                    status: "",
                    photos: { small: "", large: "" },
                    followed: true
                }
            ],
            pageSize: 10,
            totalUsersCount: 0,
            currentPage: 1,
            isFetching: false,
            followingInProgress: [],
            term: " ",
            friend: true
        }
    }
)

test("follow success", () => {

    const newState = usersReducer(state, actions.followSuccess(1))
    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()

}
)
test("unfollow success", () => {

    const newState = usersReducer(state, actions.unfollowSuccess(2))
    expect(newState.users[2].followed).toBeFalsy()
    expect(newState.users[3].followed).toBeTruthy()

}
)