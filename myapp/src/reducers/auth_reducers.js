const default_state = {
  is_login: false
}

const auth_reducers = (state = default_state, action) => {

    switch (action.type) {
      case 'LOGIN_ACTION':
        return {
          is_login: true
        }
      case 'LOGOUT_ACTION':
          return {
            is_login: false
          }
    default:
        return state
    }
  }
  
  export default auth_reducers