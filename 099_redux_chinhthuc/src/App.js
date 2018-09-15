import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    // code redux [info layput redux]

      var redux = require('redux');

      var old = {
        num : ["màn hình","chuột","cáp quang"],
        EditStatus : true
      }

      

      var reducer = (state=old , action) => {
        switch (action.type) {
          case "value_key_action":
              return {...state,EditStatus:!state.EditStatus}
           
          case "value_key_action2":
              return {...state,num:[...state.num,action.newItem]}
          
          case "DELETE":
              return {...state,num : state.num.filter((value,key) => key !== action.index)}
          default:
            break;
        }
          return state;
      }

      var Store = redux.createStore(reducer);

      Store.subscribe(() => {
        console.log(JSON.stringify(Store.getState()));
      })

      
      Store.dispatch({type:"value_key_action"});
      
      Store.dispatch({
        type : "value_key_action2",
        newItem : "vũ khí tối thượng"
      });
      

      Store.dispatch({
        type:"DELETE",
        index: 0
      })
     
    
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
