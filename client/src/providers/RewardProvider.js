import React, { Component } from 'react';
import axios from 'axios';

const RewardContext = React.createContext();

export const RewardConsumer = RewardContext.Consumer;

class RewardProvider extends Component {
  state = { rewards: [] }

  getAllRewards = (user_id) => {
    axios.get(`/api/users/${user_id}/rewards`)
      .then( res => {
        this.setState({ rewards: res.data })
        // setloaded(true)
      })
      .catch( err => console.log(err) )
  }

  addReward = (user_id, reward) => {
    axios.post(`/api/users/${user_id}/rewards`, { reward } )
      .then( res => {
        const { rewards } = this.state
        this.setState({ rewards: [ ...rewards, res.data ]})
      })
      .catch( err => console.log(err) )
  }
  
  // we wernt pulling in history as a prop from the handleSubmit
  updateReward = (user_id, id, reward, history) => {
    axios.put(`/api/users/${user_id}/rewards/${id}`, { reward } )
    .then( res => {
      const rewards = this.state.rewards.map( t => {
        if (t.id === id) {
          return res.data
        }
        return t
      })
      this.setState({ rewards: rewards })
      history.push('/rewards')
    })
    .catch( err => console.log(err) )
  }

  deleteReward = (user_id, id, history) => {
    axios.delete(`/api/users/${user_id}/rewards/${id}`)
      .then( res => {
        const { rewards } = this.state
        this.setState({ rewards: rewards.filter( t => t.id !== id )})
        history.push('/rewards')
      })
      .catch( err => console.log(err) )
  }

  claimReward = (user_id, id, history) => {
    axios.get(`/api/${user_id}/rewardclaimed/${id}`)
    .then( res => {
      const rewards = this.state.rewards.map( t => {
        if (t.id === id) {
          return res.data
        }
        return t
      })
      this.setState({ rewards: rewards })
      history.push('/userdash')
    })
    .catch( err => console.log(err) )
  }

  render() {
    return(
      <RewardContext.Provider value={{
        ...this.state,
        getAllRewards: this.getAllRewards,
        addReward: this.addReward,
        updateReward: this.updateReward,
        deleteReward: this.deleteReward,
        claimReward: this.claimReward,
      }}>
        { this.props.children }
      </RewardContext.Provider>
    )
  }
}

export default RewardProvider;

