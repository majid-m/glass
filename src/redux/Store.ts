import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userReducer from '~/redux/SliceReducers/UserSlice';

const mainPersistConfig = {
    key: 'main',
    storage: AsyncStorage,
};

const mainPersistReducer = combineReducers({
    userReducer,
});

const store = configureStore({
    reducer: {
        persistData: persistReducer(mainPersistConfig, mainPersistReducer),
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

let persistor = persistStore(store);

export { store, persistor };