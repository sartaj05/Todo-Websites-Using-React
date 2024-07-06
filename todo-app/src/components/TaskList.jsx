import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const handleEdit = (taskId, newTask) => {
    const editedTask = prompt('Edit task:', newTask);
    if (editedTask) {
      dispatch(editTask(taskId, editedTask));
    }
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
          <button onClick={() => handleToggle(task.id)}>
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => handleEdit(task.id, task.text)}>Edit</button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
