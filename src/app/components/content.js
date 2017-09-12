import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TableExampleControlled from 'components/table'
import TableExampleComplex from 'components/tablelog'


const style = {
    display: 'table-cell',
    width : '45%',
    margin : 10
  };
const style3 = {
    display: 'inline-block',
    width : '90%',
    // overflow : 'auto',
    height: 500,
    margin : 20
  };

const style2 = {
height: 500,
display: "inline-block"
}

var llll = [{thiss : "ksjdfksd", that : 939393},{thiss : "ksjdfksd", that : 939393}];
var lollwa =2333333;
var lollwa2 = 0

setInterval(function increase() {
  // body...
  // lollwa = lollwa + 1
},500)
export default class CardExampleExpandable extends React.Component {

  constructor(props){
    super(props);

    this.state={
      todos:llll,
      dfg:lollwa,
      dfg2:lollwa2,
      data_received : this.props.data_received
    }
    this.dfg = lollwa
    this.dfg2 = lollwa2

    setInterval(this.increase.bind(this),4000)
  }


    componentWillReceiveProps(nextProps) {
      // You don't have to do this check first, but it can help prevent an unneeded render
      if (nextProps.data_received !== this.state.data_received) {
        this.setState({ data_received: nextProps.data_received });
        console.log(this.state.data_received)
      }
    }

  increase(){
    console.log(this.state.data_received)
          // body...
      // this.dfg2 = this.dfg2 + 1
      // this.state.dfg2 = this.state.dfg2 + 1
      // this.setState({dfg2: this.state.dfg2 + 1});
      // console.log(this.state)
  }

  render(){
    // setInterval(this.increase.bind(this),500)

    return (
         <div>
  <Card style={style}>
    <CardText style={style3}>
      <TableExampleComplex />
    </CardText>
  </Card>
  <Card style={style}>
    <CardText style={style3}>
      <TableExampleControlled data_received={this.state.data_received}/>
    </CardText>
  </Card>
  </div>

    )
  }
}
