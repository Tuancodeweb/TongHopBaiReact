const EditStatusInitialState = false
const EditStatus2 = (state = EditStatusInitialState, action) => {
  switch (action.type) {
    case "value_key_action":
    return !state;
    default:
      return state
  }
}
export default EditStatus2;