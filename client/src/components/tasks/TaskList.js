import React from 'react';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks }) => (
  <>
    <h1>Tasks:</h1>
    {
      tasks.map( t => 
        <>
          <Link to={{
            pathname: `/diners/${t.id}`,
            state: {...t}
          }}>
            { this.name }
          </Link>
          <br />
        </>
      )
    }
  </>
)

export default TaskList;