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
export default class SelectObjectClass extends Component {


  constructor(props){
    super(props)
    this.state = {
      object_class: this.props.object_class,
    };

    autoBind(this)
  }

  handleChange = (event, index, value) => {
    this.setState({object_class:value});
    this.props.handleSelectObject(value)
  }


  render() {

    let class_items = this.props.object_classes.map(eachclass => {
      return (
        <MenuItem key={eachclass.name} value={eachclass.name} primaryText={eachclass.name} />
      )
    })

    return (
      <div>
        <SelectField
          floatingLabelText="Class"
          value={this.state.object_class}
          onChange={this.handleChange}
        >
          {class_items}
        </SelectField>
      </div>
    );
  }
}
