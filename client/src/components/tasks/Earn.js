import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import UserTasks from '../tasks/UserTasks'
import { HeaderText, PText } from '../styledComp/EarnStyles';

const DivContainer = styled.div`
  background: linear-gradient(to top right, pink, gold);
`

const Transparent = styled(Segment)`
  background: transparent !important;
`

const HeaderText = styled.h1`
  color: navy !important;
  text-align: center;
  width: 150px;
  white-space nowrap;
  overflow: hidden;
  text-overflow: clip;
`

const Earn = () => (
  <>
    <DivContainer>
      <h1 textAlign = "center"> Earn Points</h1>
      <Segment>
        <PText> Complete tasks to earn points </PText>
        <Container>
          <UserTasks />
        </Container>
      </Segment>
    </DivContainer>
  </>
)

export default Earn;