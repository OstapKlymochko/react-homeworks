import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carsService} from "../../services";

const initialState = {
    cars: [],
    prev: null,
    next: null,
    errors: null,
    loading: null,
    carUpdate: null
}

const getAll = createAsyncThunk('carSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await carsService.getAll(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    })

const create = createAsyncThunk('carSlice/create',
    async ({car:newCar, page}, thunkAPI) => {
        try {
            const {data} = await carsService.create(newCar);
            // console.log(page);
            thunkAPI.dispatch(getAll({page}));
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    });

const update = createAsyncThunk('carSlice/update',
    async ({id, updates, page}, thunkAPI) => {
        try {
            await carsService.update(id, updates);
            // console.log(data);
            thunkAPI.dispatch(getAll({page}));
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }

    })

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarUpdate: (state, action) => {
            state.carUpdate = action.payload;
        }
    },
    extraReducers: value =>
        value.addCase(getAll.fulfilled, (state, action) => {
            state.loading = false;
            const {items, prev, next} = action.payload;
            state.cars = items;
            state.prev = prev;
            state.next = next;
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

const {reducer: carReducer, actions: {setCarUpdate}} = carSlice;
// .addCase(.fulfilled,(state, action)=>{})getA
const carActions = {
    getAll,
    create,
    setCarUpdate,
    update
}
export {
    carReducer, carActions, carSlice
}