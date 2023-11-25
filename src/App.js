import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormApp} from './components/FormApp';
import { Todos } from './components/Todos';
import { useDispatch, useSelector } from 'react-redux';
import {deleteAll} from './redux/todoapp/actions';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.operationsReducer)
  const [editFormVisibility, setEditFormVisibility]=useState(false);
  const [editTodo, setEditTodo]=useState('');
  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }
  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }
  return (
    <div className="wrapper">
      <br/>
      <h2 className='text-center'>Todo App</h2>
      <FormApp editFormVisibility={editFormVisibility} editTodo={editTodo}
      cancelUpdate={cancelUpdate}/>
      <Todos  handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
      {todos.length>1&&(
        <button  className='btn btn-primary btn-md delete-all'
        onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
      )}
      <p>Number of your todos: {todos.length}</p>
    </div>
  );
}

export default App;
