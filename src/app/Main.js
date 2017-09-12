/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, Switch } from 'react-router-dom'
import Websocket from 'react-websocket';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ToolbarExamplesSimple from 'components/toolbar'
import CardExampleExpandable from 'components/content'


const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      count : 90,
      data_received : ''
    }
    this.data_received = {}
    this.socket =  new WebSocket('ws://127.0.0.1:8888');
    this.socket.onmessage = (event) => {
      this.setState({data_received : JSON.parse(event.data)})
      console.log(this.state.data_received)
    }
    this.socket.onopen = (event) => {
      console.log("connected nowwwwwwww")
      this.socket.send('ksjhkdsjfkdsj')
    }
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleData = (data) => {
    let result = JSON.parse(data);
    console.log(result)
    this.setState({count: this.state.count + result.movement});
  }

  handleStartPick = (bin_no, object_class) => {
    console.log("Pick from : ", bin_no, object_class)
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  render() {

    const Home = () =>
          <MuiThemeProvider muiTheme={muiTheme}>
            <div>
              <ToolbarExamplesSimple startPick={this.handleStartPick}/>
              <CardExampleExpandable data_received={this.state.data_received}/>
            </div>
          </MuiThemeProvider>

    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
      //   <Router history={hashHistory}>
      //   <Route path='/' component={Home} />
      //   <Route path='/address' component={Address} />
      // </Router>

    );
  }
}

export default Main;
