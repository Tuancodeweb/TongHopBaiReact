import Valuekey from './Reducer/ChangeReducers';
import EditStatus2 from './Reducer/EditStateReducers';

// code redux [info layput redux]

var redux = require('redux');

var old = {
  num : ["màn hình","chuột","cáp quang"],
  EditStatus : false
}



var reducer = (state=old,action) => {
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



const all = redux.combineReducers({
  num : Valuekey,
  EditStatus:EditStatus2
})

// cách tách các reducer ra để quản lý cho EASY



var Store = redux.createStore(all);

Store.subscribe(() => {
  console.log(JSON.stringify(Store.getState()));
})


Store.dispatch({
  type:"value_key_action"
});

Store.dispatch({
  type : "value_key_action2",
  newItem : "vũ khí tối thượng"
});


Store.dispatch({
  type:"DELETE",
  index: 0
})

// Store : chính là store của state
export default Store;