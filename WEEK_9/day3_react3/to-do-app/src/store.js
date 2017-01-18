import {combineReducers, createStore} from 'redux'

import todos from './redux/todos'

const reducer = combineReducers(
  {
    todos:todos
  }
);

export default createStore(reducer)
