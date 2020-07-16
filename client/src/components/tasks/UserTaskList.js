import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

const UserTaskList = ({ tasks, user }) => (
  tasks.map( t => 
    <>
      <Card>
      <Link to={{
        pathname: `/usertasks/${t.id}`,
        state: {...t, user}
      }}>
        { t.task_name }
      </Link>
      </Card>
    </>
  )
)

export default UserTaskList;

