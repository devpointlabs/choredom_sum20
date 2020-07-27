import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import UserTasks from '../tasks/UserTasks'

import { HeaderText, PText } from '../styledComp/EarnStyles';

const Earn = () => (
  <>
    <br/>
    <HeaderText> Earn Points</HeaderText>
    <PText> Complete tasks to earn points </PText>
    <Container>
        < UserTasks />
    </Container>
  </>
)

export default Earn;
