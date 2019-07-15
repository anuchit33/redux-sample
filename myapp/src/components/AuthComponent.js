import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logout_action,login_action } from '../actions'
import {Button} from 'semantic-ui-react'

class AuthComponent extends Component {
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

    const {auth_reducers} = this.props

    return (<div> 
        <h1>[AuthComponent]</h1>
        <Button primary onClick={this.handleClick}>{auth_reducers.is_login?'Logout':'Login'}</Button>
    </div>)
  }
}


// mapStateToProps
const mapStateToProps = state =>{

    return ({
      auth_reducers: state.auth_reducers
    })
  }
  export default connect(
    mapStateToProps,
  )(AuthComponent)
