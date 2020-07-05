import React from 'react';
import { TaskConsumer } from '../../providers/TaskProvider';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Tasks = () => (
  <TaskConsumer>
    {
      value => (
        <>
          <h1>Tasks Page</h1>
          <TaskForm addTask={value.addTask} />
          <TaskList tasks={value.tasks} />
        </>
      )
    }
  </TaskConsumer>
) 

export default Tasks;