
const initialState = {
  todos:[
    {
      name:'Learn Redux',
      complete:false
    },
    {
      name:'Clean Dishes',
      complete:false
    },
    {
      name:'Do Classwork',
      complete:true
    }
  ]
}
export default function reducer(state=initialState,action) {
  switch(action.type) {
    case 'ADD_TODO':
    const newToDo = {
      name: action.payload,
      complete:false
    };



    return Object.assign({},state,{todos: [...state,todos,newTodo]})



    case 'COMPLETE_TODO':
    const todos =state.todos.map( todo => {
      if(todo === action.payload){
        todo.complete = !todo.complete
      }
      return todo
    })


    return Object.assign({},state,{todos:todos})

  default:
  return state
  }

}
