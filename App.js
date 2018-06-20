// importing react, react native components and redux
import React from 'react';

import { Provider } from "react-redux";

import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './configure';

// import the Main App component
import Main from "./Main";

// pass our store through to Main using props
const App = () => (
  <Provider store={ store }>
    <PersistGate loading={null} persistor={persistor}>
      <Main />
    </PersistGate>
  </Provider>
)

export default App;

// https://github.com/rt2zz/redux-persist TRY GET ME WORKING
