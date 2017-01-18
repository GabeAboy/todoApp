import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from './store'
class Todos extends Component {

    render() {

      function handleClick(event) {
        store.dispatch({
          type:'COMPLETE_TODO',
          payload:name
        })
      }
      console.log(this.props.todos);
      const todos = this.props.todos.map((todo,i)=> {
        return (
          <li key={i}
          className={todo.comlpete ? 'complete' : null}
          onClick={handleClock.bind(this, todo.name)}>{todo.name}</li>
        )
      })
      return (

        // <div>
        //   <ul>
        //     // <li>Sweep the flood</li>
        //     // <li>Scrap Ice</li>
        //     // <li>Wash dishes</li>
        //   </ul>
        // </div>
        <li
        key={li}
        className={todo.complete ? 'complete' : null }
        onClick={handleClick.bind(this, todo.name)}>{todo.name}, Complete: {todo.complete ? 'True' : 'False'}</li>
      )

    }
}
function mapStateToProps(state) {
  console.log('state changed');
  return {
    todos:state.todos.todos
  }
}

export default connect((state)=> {

})(Todos)
