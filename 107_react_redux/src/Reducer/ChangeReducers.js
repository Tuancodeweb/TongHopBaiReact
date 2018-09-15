// cách tách các reducer ra để quản lý cho EASY
const ValuekeyInitialState = ["màn hình","chuột","cáp quang"];
const Valuekey = (state = ValuekeyInitialState, action) => {
  switch (action.type) {
    case "value_key_action2":
    return [...state,action.newItem]

    case "DELETE":
    return [state.filter((value,key) => key !== action.index)]
    default:
      return state
  }
}
export default Valuekey;