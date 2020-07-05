import React from 'react';
import { RewardConsumer } from '../../providers/RewardProvider';
import RewardForm from './RewardForm';
import RewardList from './RewardList';

const Rewards = () => (
  <RewardConsumer>
    {
      value => (
        <>
          <h1>Rewards</h1>
          <RewardForm addReward={value.addReward} />
          <RewardList rewards={value.rewards} />
        </>
      )
    }
  </RewardConsumer>
) 

export default Rewards;