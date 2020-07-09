import React from 'react';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks }) => (
  tasks.map( t => 
    <>
      <Link to={{
        pathname: `/tasks/${t.id}`,
        state: {...t}
      }}>
        { t.task_name }
      </Link>
      <br />
    </>
  )
)

export default TaskList;