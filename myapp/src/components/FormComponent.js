import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form ,Input,Button} from 'semantic-ui-react'
import { setName_action } from '../actions'

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }

    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleSubmit(e){

    const {dispatch} = this.props
    const {name} = this.state
    dispatch(setName_action(name))

  }
  render() {

    const {name_reducers} = this.props
    const {name} = this.state

    return (<div> 
        <h1>[FormComponent]</h1>
        <Form>
            <p>Name: {name_reducers.name}</p>
            <p>Input: {name}</p>
            <Input placeholder='Name' value={name} onChange={(e,{value})=>this.setState({name: value})}/>
            <Button onClick={this.handleSubmit}>Set Name</Button>
        </Form>
    </div>)
  }
}


// mapStateToProps
const mapStateToProps = state =>{

    return ({
      name_reducers: state.name_reducers
    })
  }
  export default connect(
    mapStateToProps,
  )(FormComponent)
