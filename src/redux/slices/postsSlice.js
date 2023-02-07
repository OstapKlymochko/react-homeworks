import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsServices} from "../../services/postsServices";

const initialState = {
    posts: [],
    errors: null,
    loading: null,
    selectedPost: null
}
const getAllPosts = createAsyncThunk('postSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postsServices.getAll();
            // console.log(data);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    })

const getPostById = createAsyncThunk('postSlice/getPostById',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await postsServices.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    });

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        clean: (state) => {
            state.selectedPost = null;
        }
    },
    extraReducers: (val) => {
        val.addCase(getAllPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        })
            .addCase(getAllPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
            .addCase(getPostById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedPost = action.payload;
            })
            .addCase(getPostById.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPostById.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
    }
})

const {reducer: postReducer, actions: {clean}} = postSlice;

const postActions = {
    getAllPosts,
    getPostById,
    clean
}
export {
    postActions,
    postReducer,
    postSlice
}