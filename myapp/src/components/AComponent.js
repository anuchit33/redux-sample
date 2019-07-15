import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logout_action,login_action } from '../actions'
import {Button} from 'semantic-ui-react'

class AComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    const {auth_reducers,dispatch} = this.props

    if(auth_reducers.is_login){

      // call logout_action
      dispatch(logout_action())
    }else if(!auth_reducers.is_login){

      // call logout_action
      dispatch(login_action())
  }
  }

  render() {

    const {auth_reducers,name_reducers} = this.props

    return (<div> 
        <h1>[AComponent]</h1>
        <p>Status: {auth_reducers.is_login?'Login':'Logout'}</p>
        <p>Name: {name_reducers.name}</p>
    </div>)
  }
}


// mapStateToProps
const mapStateToProps = state =>{

    return ({
        name_reducers:  state.name_reducers,
        auth_reducers: state.auth_reducers
    })
  }
  export default connect(
    mapStateToProps,
  )(AComponent)
