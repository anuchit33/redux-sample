const default_state = {
    name: "Redux"
  }

const name_reducers = (state = default_state, action) => {
    switch (action.type) {
      case 'SET_NAME_ACTION':
        return {
            name: action.name
        }
    default:
        return state
    }
  }
  
  export default name_reducers