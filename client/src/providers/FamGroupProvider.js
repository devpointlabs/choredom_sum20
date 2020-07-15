import React, { Component } from 'react';
import axios from 'axios';

const FamGroupContext = React.createContext();

export const FamGroupConsumer = FamGroupContext.Consumer;

class FamGroupProvider extends Component {
  state = { rewards: [] }

  getAllFamGroups = (user_id) => {
    axios.get(`/api/users/${user_id}/famgroups`)
      .then( res => {
        this.setState({ famgroups: res.data })
      })
      .catch( err => console.log(err) )
  }

  addFamGroup = (fam_id, famgroup) => {
    axios.post(`/api/fams/${fam_id}/famgroups`, { famgroup } )
      .then( res => {
        const { famgroups } = this.state
        this.setState({ famgroups: [ ...famgroups, res.data ]})
      })
      .catch( err => console.log(err) )
  }

  updateFamGroup = (user_id, id, famgroup) => {
    axios.put(`/api/users/${user_id}/famgroups/${id}`, { famgroup } )
    .then( res => {
      const famgroups = this.state.famgroups.map( f => {
        if (f.id === id) {
          return res.data
        }
        return f
      })
      this.setState({ famgroups: famgroups })
    })
    .catch( err => console.log(err) )
  }

  deleteFamGroup = (user_id, id) => {
    axios.delete(`/api/users/${user_id}/famgroups/${id}`)
      .then( res => {
        const { famgroups } = this.state
        this.setState({ famgroups: famgroups.filter( f => f.id !== id )})
      })
      .catch( err => console.log(err) )
  }

  render() {
    return(
      <FamGroupContext.Provider value={{
        ...this.state,
        getAllFamGroups: this.getAllFamGroups,
        addFamGroup: this.addFamGroup,
        updateFamGroup: this.updateFamGroup,
        deleteFamGroup: this.deleteFamGroup,
      }}>
        { this.props.children }
      </FamGroupContext.Provider>
    )
  }
}

export default FamGroupProvider;