import { configureStore, createSlice } from "@reduxjs/toolkit";

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
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        populatePosts: (state, action) => {
            state.posts = action.payload;
        },
        populateSelectedPost: (state, action) => {
            state.selectedPost = action.payload;
        },
        updateNewPostInput: (state, action) => {
            state.newPost = { ...state.newPost, ...action.payload };
        },
        setUserId: (state, action) => {
            state.userId = action.payload.userId;
            state.userEmail = action.payload.userEmail;
            state.userName = action.payload.userName;
        },
        logOut: (state) => {
            state.selectedPost = {};
            state.newPost = {
                id: "",
                title: "",
                body: ""
            };
            state.showSideDrawer = false;
            state.userId = null;
            state.userEmail = null;
            state.userName = null;
        },
        openSideDrawer: (state) => {
            state.showSideDrawer = true;
        },
        closeSideDrawer: (state) => {
            state.showSideDrawer = false;
        }
    }
});

export const { 
    populatePosts, 
    populateSelectedPost, 
    updateNewPostInput,
    setUserId, 
    logOut, 
    openSideDrawer, 
    closeSideDrawer 
} = appSlice.actions;

export const store = configureStore({
    reducer: {
        app: appSlice.reducer
    }
})
