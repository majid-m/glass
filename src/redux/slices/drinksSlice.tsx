import { createSlice } from '@reduxjs/toolkit';

import { IDrinkItem } from '~/models/drink';

const initialState: { drinkItems: IDrinkItem[], dirkedVolume: number, maxVolume: number } = {
    drinkItems: [],
    dirkedVolume: 0,
    maxVolume: 20,
};

const drinksSlice = createSlice({
    name: 'drinks',
    initialState,
    reducers: {
        addDrink: (state, action: { payload: IDrinkItem }) => {
            state.drinkItems.push(action.payload);
        },
        editDrink: (state, action: { payload: IDrinkItem }) => {
            let drinkIndex: number = state.drinkItems.findIndex((item) => item.id === action.payload.id);
            console.log(drinkIndex)
            state.drinkItems[drinkIndex] = action.payload;
        },
        activeDrink: (state, action: { payload: number }) => {
            let drinkIndex = state.drinkItems.findIndex((item) => item.id === action.payload);
            state.drinkItems = state.drinkItems.map((item, index) => ({ ...item, isActive: (drinkIndex === index) ? true : false }));
        },
        drinkPlus: (state, action: { payload: number }) => {
            state.dirkedVolume += action.payload;
        },
        drinkMinus: (state, action: { payload: number }) => {
            let newDirkedVolume: number = state.dirkedVolume - action.payload;
            if (newDirkedVolume >= 0) {
                state.dirkedVolume = newDirkedVolume;
            } else {
                state.dirkedVolume = 0;
            };
        },
        resetDrinks: () => {
            return initialState;
        },
    },
});

export const { addDrink, editDrink, activeDrink, drinkPlus, drinkMinus, resetDrinks } = drinksSlice.actions;
export const drinksReducer = drinksSlice.reducer;