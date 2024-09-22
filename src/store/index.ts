import { configureStore } from '@reduxjs/toolkit';
import authDataReducer from "./auth/authDataSlice";
import { logger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import homeReducer from './home/home.slice';
import categoryReducer from './category/category.slice';
import productReducer from './product/productSlice';

// Array to hold middleware
const middleware: any = [];

// Add logger middleware to the array
if (process.env.REACT_APP_IS_DEV) {
  middleware.push(logger);
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["loginDetails","selectedCurrency"]

}

const authReducer = persistReducer(persistConfig, authDataReducer)
// Configure the Redux store
const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
    category:categoryReducer,
    product: productReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    // Disable checks for immutability and serializability for improved performance
    immutableCheck: false,
    serializableCheck: false
  }).concat(middleware),
});

export const persistor = persistStore(store)


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: { auth: AuthState, dashboard: DashboardState, commonData: CommonState, region: RegionState, home: HomeState }
export type AppDispatch = typeof store.dispatch;

export default store;
