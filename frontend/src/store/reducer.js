import * as actionTypes from "./actions"

const initialState = {
    posts: [],
    selectedPost: {},
    newPost: {
        id: "",
        title: "",
        body: ""
    },
    showSideDrawer: false,
    userId: null,
    userEmail: null,
    userName: null
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POPULATE_POSTS:
            return {
                ...state,
                posts: action.newPosts
            }
        case actionTypes.POPULATE_SELECTED_POST:
            return {
                ...state,
                selectedPost: action.newPost
            }
        case actionTypes.SET_USER_ID:
            console.log(action.userId)
            return {
                ...state,
                userId: action.userId,
                userEmail: action.userEmail,
                userName: action.userName
            }
        case actionTypes.LOG_OUT:
            return {
                posts: [],
                selectedPost: {},
                newPost: {
                    id: "",
                    title: "",
                    body: ""
                },
                showSideDrawer: false,
                userId: null,
                userEmail: null,
                userName: null
            }
        default:
            return state
    }
}

export default reducer