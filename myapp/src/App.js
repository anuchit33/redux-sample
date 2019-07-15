import React, { Component } from 'react';
import { Container,Divider,Header} from 'semantic-ui-react'
import { connect } from 'react-redux'

import './App.css';

// components
import AuthComponent from './components/AuthComponent'
import FormComponent from './components/FormComponent'
import AComponent from './components/AComponent'
import BComponent from './components/BComponent'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    //console.log('App props',this.props)

    return (
      <Container className="App">
        <Header size='huge'>Redux sample with reactjs</Header>

        <AuthComponent/>

        <Divider />

        <FormComponent />

        <Divider />

        <AComponent/>

        <Divider />

        <BComponent/>

      </Container>
    );
  }
}

// mapStateToProps
const mapStateToProps = state =>{

  console.log('Redux Storate state_all',state)
  return ({
    auth_reducers: state.auth_reducers,
    name_reducers: state.name_reducers
  })
}
export default connect(mapStateToProps, )(App)
