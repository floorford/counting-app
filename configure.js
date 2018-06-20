import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// defaults to localStorage for web and AsyncStorage for react-native

import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';

import reducer from './data/reducer'; // the value from combineReducers
import initial from './data/initial';

const persistConfig = {
  // this defines the storage library our persisted reducer sends the info to, and what kind of persistance it has
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel1,
}

// other examples were accessing the initial state a different way, we are using an initial state object which we pass into createStore, the other way is inside the reducer where you have a default state which sets up a state where the state is undefined something like this: export default function counter(state = 0, action)


const persistedReducer = persistReducer(persistConfig, reducer)
// adds the persistance to the reducers
//this is a persist aware version of our reducer

export const store = createStore(persistedReducer, initial)
//passing the resist aware version of our reducer into our redux store

export const persistor = persistStore(store)
// this "persister" now wraps entire store, with the persisted reducer inside - enhances it to handle app startup, allows initial to load, then takes the persisted store and places it into the initial, the app now things that this is the initial storage

//this is process is ASYNCHRONROUS so there's an intermittant period between intial store and persisted store, if app renders in this period, the user will see this period. The persistor gets arond this by telling the app not to render until the persisted store has been retrieved -> the persist gate does this

// redux uses the store as normal, and the persist gate is what is telling the app to wait and not render until we have the info

// Redux Persist sits after reducer, hooks into the state the reducer returns, takes that state and persists it to a place on your device so that it can be restored later - means that the store is preserved outsite of memory. Hydrates your store to the last known state it persisted. Every time the reducer runs it takes that and persists that.
