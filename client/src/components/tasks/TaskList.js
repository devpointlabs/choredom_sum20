import React from 'react';
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

const TaskList = ({ tasks }) => (
  tasks.map( t => 
    <>
    <Segment>
      <Link to={{
        pathname: `/tasks/${t.id}`,
        state: {...t}
        }}>
        { t.task_name }
      </Link>
      </Segment>
    </>
  )
)

export default TaskList;