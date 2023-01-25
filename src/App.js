import React, {Fragment} from 'react';
import './App.css';

//components

import InputTodo from "./components/InputTodo";
import ListTodos from './components/ListTodos';

const App = () => {
  return (
   <>
    <div className='container'>

    <InputTodo />
    <ListTodos />
    </div>
   </>
  );
}

export default App;
