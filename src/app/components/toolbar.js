import React from 'react';
import autoBind from 'react-autobind';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import SelectBin from 'components/binselect'
import SelectObjectClass from 'components/objectselect'

const object_classes = [
  {
  "id"   : 1,
  "name" : "ball"
  } ,
  {
  "id"   : 2,
  "name" : "book"
  } ,
  {
  "id"   : 3,
  "name" : "fogg"
  } ,
  {
  "id"   : 4,
  "name" : "greenbox"
  } ,
  {
  "id"   : 5,
  "name" : "soap"
  } ,
  {
  "id"   : 6,
  "name" : "lakme"
  } ,
  {
  "id"   : 7,
  "name" : "axe"
  } ,
  {
  "id"   : 8,
  "name" : "bulb"
  } ,
  {
  "id"   : 9,
  "name" : "face_cream"
  } ,
  {
  "id"   : 10,
  "name" : "tennis_ball_pack"
  } ,
  {
  "id"   : 11,
  "name" : "handwash"
  }
]

const bins = [3,4,8,9]


export default class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
      bin_no : 4,
      object_class : 'axe',
      pick_state : false
    };
    // setInterval(function functionName() {
    //   if(this.state.bin_no == 4){
    //     this.setState({bin_no:3})
    //   }else {
    //     this.setState({bin_no:4})
    //   }
    // }.bind(this), 1000)
     autoBind(this); /////otherwise 'this' becomes undefined inside startPick /// using syntax as handleSelectBin will help in such case
  }

  handleSelectBin = (bin_no)  => {
    this.setState({bin_no:bin_no})
  }

  handleSelectObject = (object_class) => {
    this.setState({object_class:object_class})
  }

  startPick = ()  => {
    this.props.startPick(this.state.bin_no, this.state.object_class)
  }

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true} style={{margin:10}}>
          <SelectBin handleSelectBin={this.handleSelectBin} bins={bins} bin_no={this.state.bin_no}/>
        </ToolbarGroup>
        <ToolbarGroup>
          <SelectObjectClass handleSelectObject={this.handleSelectObject} object_classes={object_classes} object_class={this.state.object_class}/>
        </ToolbarGroup>
        <ToolbarGroup>

          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
          <RaisedButton label="Pick" primary={true} onClick={this.startPick} disabled={this.state.pick_state} />
          <IconMenu
            iconButtonElement={
              <IconButton touch={true} >
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="More Info" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
