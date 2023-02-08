import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carsService} from "../../services";

const initialState = {
    cars: [],
    errors: null,
    loading: null,
    carUpdate: null
}
const getAll = createAsyncThunk('carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            console.log('Fetching data');
            const {data} = await carsService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    })

const create = createAsyncThunk('carSlice/create',
    async (newCar, {rejectWithValue}) => {
        try {
            const {data} = await carsService.create(newCar);
            // console.log(newCar);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    });

const update = createAsyncThunk('carSlice/update',
    async ({id, updates}, {rejectWithValue}) => {

        try {
            const {data} = await carsService.update(id, updates);
            console.log(data);
        } catch (e) {
            return rejectWithValue(e.response.data);
        }

    })

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarUpdates: (state, action) => {
            state.carUpdate = action.payload;
        }
    },
    extraReducers: value =>
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
            .addCase(create.fulfilled, (state,) => {
                state.loading = false;
                // state.cars = [...state.cars, action.payload];
            })
            .addCase(create.pending, (state) => {
                state.loading = true;
            })
            .addCase(create.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
            .addCase(update.fulfilled, (state,) => {
                state.loading = false;
            })
            .addCase(update.pending, (state) => {
                state.loading = true;

            })
            .addCase(update.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
})

const {reducer: carReducer, actions: {setCarUpdates}} = carSlice;
// .addCase(.fulfilled,(state, action)=>{})getA
const carActions = {
    getAll,
    create,
    setCarUpdates,
    update
}
export {
    carReducer, carActions, carSlice
}