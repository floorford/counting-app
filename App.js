// importing react, react native components and redux
import React from 'react';

import { createStore } from "redux";
import reducer from "./reducer";
import initial from "./initial";

import { Provider } from "react-redux";

const store = createStore(
  reducer,
  initial,
);

// import the App component
import Main from "./Main";

// pass our store through to Main using props
const App = () => (
  <Provider store={ store }>
    <Main />
  </Provider>
)

export default App;
