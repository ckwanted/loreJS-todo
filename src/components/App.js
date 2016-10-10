import React, { Component, PropTypes } from 'react';
import TodoList from './TodoList';

export default class App extends Component {

  static propTypes = {};

  constructor(props) {
    super(props);

    // Set your initial state here
    // this.setState = {};

    // Bind your custom methods so you can access the expected 'this'
    // this.myCustomMethod = this.myCustomMethod.bind(this);
  }

  render() {
    return (
      <div style={{width: '80%', maxWidth : '1440px', margin: 'auto'}}>
        <TodoList />
      </div>
    )
  }
}
