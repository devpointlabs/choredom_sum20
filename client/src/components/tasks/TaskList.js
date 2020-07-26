import React from 'react';
import { Link } from 'react-router-dom';
import { StyledSegment, SegmentHeader, SegmentText, SegmentCost } from '../styledComp/DashStyles';

const TaskList = ({ tasks }) => (
  tasks.map( t => 
    <>
      <Link to={{
      pathname: `/tasks/${t.id}`,
      state: {...t}
      }}>
        <StyledSegment>
          <SegmentHeader>{ t.task_name }</SegmentHeader>
          <SegmentText>{ t.task_description }</SegmentText>
          <SegmentCost> +{ t.task_value } </SegmentCost>
        </StyledSegment>
      </Link>
      <br/>
    </>
  )
)

export default TaskList;