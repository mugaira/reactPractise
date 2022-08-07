import React from 'react';

const Todo = () => {
  const [tasks, setTasks] = React.useState([]);
  const [todo, setTodo] = React.useState('');

  const handleTaskAdd = () => {
    setTasks([...tasks, todo]);
    setTodo('');
  };

  const handleTaskRemove = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Enter task name'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleTaskAdd}>Add Task</button>
      <hr />
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task}{' '}
            <button onClick={() => handleTaskRemove(task)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
