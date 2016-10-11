import React, { Component, PropTypes } from 'react';
import { ListItem, ListItemContent, ListItemAction, Checkbox } from 'react-mdl';

export default class Todo extends Component {

  static propTypes = {
    nombre : React.PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      nombre : this.props.nombre,
      checked : this.props.checked ? true : false
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      checked : !this.state.checked
    });
    return this.state.checked;
  }

  render() {
    return (
      <ListItem>
        <ListItemContent style={(this.state.checked) ? {color : 'red', textDecoration : 'line-through'} : {}}>{this.state.nombre}</ListItemContent>
        <ListItemAction>
          <Checkbox
            defaultChecked={this.state.checked}
            onChange={this.onChange}
            onClick={this.props.onClick.bind(null, {
              id : this.props.id,
              checked : this.state.checked
            })}
          />
        </ListItemAction>
      </ListItem>
    )
  }
}
