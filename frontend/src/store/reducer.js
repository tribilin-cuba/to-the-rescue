import * as actionTypes from "./actions"

const initialState = {
    posts: [],
    selectedPost: {},
    newPost: {
        id: "",
        title: "",
        body: ""
    },
    showSideDrawer: false
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
        default:
            return state
    }
}

export default reducer