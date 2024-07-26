import React ,{useState} from "react";
import { Button } from 'antd';
import { Input } from 'antd';

export default function App (){
  const [todos,setTodos] = useState([]);
  const [todo,setTodo] = useState();
  const [flag,setFlag] = useState(false);

  const addTodo= () =>{
    let tempArr = [...todos];
    tempArr.push(todo)
    todos.length <= 0 ? setFlag(true) : setFlag(false);
    setTodos(tempArr);
  }
  return(
    <>
    <Input  placeholder="Basic usage" 
    onChange={(e)=>{
      setTodo(e.target.value)
    }} />


<Button  onClick={()=>{addTodo()}} type="primary">Add Todo</Button>
    { todos.length > 0 ?
    <>
    <ul className=  'todoItem-list'>
      {
        todos.map(item => <li>{item}</li>)
      }
    </ul>
    </>
    :null
}
    </>
  )
}
