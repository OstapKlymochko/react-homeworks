import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersServices} from "../../services/usersServices";

const initialState = {
    users: [],
    errors: null,
    loading: null,
    selectedUser: null
}

const getAll = createAsyncThunk('userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await usersServices.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    });

const getById = createAsyncThunk('userSlice/getById',
        async (id, {rejectWithValue}) => {
        try {
            // console.log(id);
            const {data} = await usersServices.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
            // console.log(e.response, typeof rejectWithValue);
        }
    });

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        // getAll: (state, action) => {
        //     state.users = action.payload;
        // },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        }
    },
    extraReducers: (val) => {
        val.addCase(getAll.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
            .addCase(getAll.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedUser = action.payload;
            })
            .addCase(getById.pending, (state) => {
                state.loading = true;
            })
            .addCase(getById.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
    }
});

const {reducer: userReducer, actions: {setSelectedUser}} = userSlice;

const userActions = {
    getAll,
    getById,
    setSelectedUser
};

export {
    userReducer,
    userSlice,
    userActions,
}