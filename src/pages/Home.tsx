/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    const { data } = await axios.get('http://localhost:5000/todos/all', {
      headers: {
        'x-auth-token': localStorage['x-auth-token'],
      },
    });
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  });
  return (
    <div>
      {todos.map((todo) => {
        // @ts-ignore
        return <div key={todo._id}>{todo.text}</div>;
      })}
    </div>
  );
};

export default Home;
