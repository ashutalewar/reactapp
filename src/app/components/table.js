import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class TableExampleControlled extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: [1],
      data_received : this.props.data_received,
      tableData : []
    };
  }

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.data_received !== this.state.data_received) {
      this.setState({ data_received: nextProps.data_received });
      var tableData = this.state.tableData
      tableData.push(this.state.data_received)
      this.setState({ tableData : tableData });
      console.log(this.state.tableData.length)
    }
  }

  render() {
    return (
      <Table onRowSelection={this.handleRowSelection} height={'450px'}>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false} enableSelectAll={false}>
          <TableRow>
            <TableHeaderColumn width={'20px'}>Timestamp</TableHeaderColumn>
            <TableHeaderColumn>message</TableHeaderColumn>
            <TableHeaderColumn>topic</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
        {this.state.tableData.map( (row, index) => (
          <TableRow key={index}>
            <TableRowColumn  width={'30px'}>{row.timestamp}</TableRowColumn>
            <TableRowColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>{row.message}</TableRowColumn>
            <TableRowColumn>{row.topic}</TableRowColumn>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}
