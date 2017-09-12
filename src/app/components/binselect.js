import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import autoBind from 'react-autobind';

const styles = {
  customWidth: {
    width: 150,
  },
};

/**
 * `SelectField` is implemented as a controlled component,
 * with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
export default class SelectBin extends Component {

  constructor(props){
    super(props);

    this.state = {
      bin_no: this.props.bin_no,
    };

    this.bin_nos = this.props.bins.map(eachbin => {
      return (
        <MenuItem key={eachbin} value={eachbin} primaryText={eachbin} />
      )
    })

  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.bin_no !== this.state.bin_no) {
      this.setState({ bin_no: nextProps.bin_no });
    }
  }

  handleChange = (event, index, value) => {
    this.setState({object_class:value});
    this.props.handleSelectBin(value)
  }

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Bin No."
          value={this.state.bin_no}
          onChange={this.handleChange}
        >
          {this.bin_nos}
        </SelectField>
      </div>
    );
  }
}
