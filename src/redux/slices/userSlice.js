import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersServices} from "../../services/usersServices";

const initialState = {
    users: [],
    errors: null,
    loading: null,
    selectedUser: null
}

const getAllUsers = createAsyncThunk('userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await usersServices.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    });

const getUserById = createAsyncThunk('userSlice/getById',
        async (id, {rejectWithValue}) => {
        try {
            // console.log(id);
            const {data} = await usersServices.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    });

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        }
    },
    extraReducers: (val) => {
        val.addCase(getAllUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
            .addCase(getAllUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
            .addCase(getUserById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedUser = action.payload;
            })
            .addCase(getUserById.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUserById.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
    }
});

const {reducer: userReducer, actions: {setSelectedUser}} = userSlice;

const userActions = {
    getAll: getAllUsers,
    getById: getUserById,
    setSelectedUser
};

export {
    userReducer,
    userSlice,
    userActions,
}