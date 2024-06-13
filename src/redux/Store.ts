import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSensitiveStorage from 'redux-persist-sensitive-storage';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userReducer from '@redux/SliceReducers/UserSlice';

const sensitiveStorage = createSensitiveStorage({
    keychainService: 'userDataKeyChain',
    sharedPreferencesName: 'userDataSharedPrefs'
});

const userDataPersistConfig = {
    key: 'user',
    storage: sensitiveStorage,
};

const mainPersistConfig = {
    key: 'main',
    storage: AsyncStorage,
};

const mainPersistReducer = combineReducers({

});

const mainReducer = combineReducers({

});

const store = configureStore({
    reducer: {
        userData: persistReducer(userDataPersistConfig, userReducer),
        // persistData: persistReducer(mainPersistConfig, mainPersistReducer),
        // main: mainReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

let persistor = persistStore(store);

export { store, persistor };