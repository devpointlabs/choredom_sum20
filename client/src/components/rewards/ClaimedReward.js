import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const ClaimedReward = ({ reward_name, reward_description, usedReward, id}) => (
  <>
  <Card>
      <Card.Content>
        <p> {reward_name} </p>
        <p> {reward_description} </p>
        <Button onClick={() => usedReward(id)}>use reward</Button>
      </Card.Content>
    </Card>
  </>
)

export default ClaimedReward;