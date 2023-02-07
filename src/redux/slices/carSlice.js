import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsService} from "../../services/carsService";

const initialState = {
    cars: [], errors: null, loading: null
}
const getAll = createAsyncThunk('carSlice/getAll',
    async (_, {rejectWithValue}) => {
    try {
        const {data} = await carsService.getAll();
        return data;
    } catch (e) {
        return rejectWithValue(e.response.data);
    }
})

const carSlice = createSlice({
    name: 'carSlice', initialState, extraReducers: value =>
    value.addCase(getAll.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
    })
        .addCase(getAll.pending, (state) => {
            state.loading = true;
        })
        .addCase(getAll.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        })
})

const {reducer: carReducer} = carSlice;
// .addCase(.fulfilled,(state, action)=>{})getA
const carActions = {
    getAll
}
export {
    carReducer, carActions, carSlice
}