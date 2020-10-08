import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import HelloWorld from "./containers/HelloWorld";
import {createStore} from "redux";
import helloReducer from "./reducers";

let store = createStore(helloReducer)

function App() {
  return (
      <Provider store={store}>
          <HelloWorld/>
      </Provider>
  );
}

export default App;
