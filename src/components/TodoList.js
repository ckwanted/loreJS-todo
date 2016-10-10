import React, { Component, PropTypes } from 'react';
import Todo from './Todo';
import { Textfield, List } from 'react-mdl';

const ENTER_KEY = 13;

export default class TodoList extends Component {

  static propTypes = {};

  constructor(props) {
    super(props);


    this.state = {
      todos : [],
      newTodo : ""
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(event) {
    this.setState({ newTodo : event.target.value });
  }

  onKeyUp(event) {
    if(event.which === ENTER_KEY && this.state.newTodo) {
      this.state.todos.push(this.state.newTodo);
      this.setState({ newTodo : "" });
      this.refs.textField.inputRef.parentNode.classList = "mdl-textfield mdl-js-textfield is-upgraded";
      this.refs.textField.inputRef.blur();
    }
  }

  onClick(obj, event) {
    console.log(obj, event);
  }

  render() {
    return (
      <div>
        <Textfield
          ref="textField"
          value={this.state.newTodo}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
          label="Introduce tu todo ..."
          style={{width: '100%'}}
        />
        <List>
          {
            this.state.todos.map((todo, index) => {
              return <Todo key={index} id={index} nombre={todo} onClick={this.onClick} />
            })
          }
        </List>
      </div>
    )
  }
}
