import React, {useEffect, useState} from 'react'

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5100/");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    getTodos();
  },[])
  console.log(todos);
  return (
    <>
       <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {todos.map((todo, i) => (
        <tr key={i}>
          <td>
              {todo.description}
          </td>
          <td>
              <button>Edit</button>
          </td>
          <td>
              <button className='btn btn-danger'>Delete</button>
          </td>
        </tr>
        
      ))}

    </tbody>
  </table>
    </>
  )
}


export default ListTodos