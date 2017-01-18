import React, {Component} from "react"
import store from './store'
class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newTodo:''
    }

    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      newTodo: event.target.value
    })
  }

  handleAddTodo() {
    store.dispatch({
      type:"ADD_TODO",
      payload: this.state.Todo
    })
  }
  
  render() {
    return (
      <div>
        <input
          value={this.state.newTodo}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddTodo} >Add Todo</button>
      </div>
    )
  }
}
export default AddTodo
