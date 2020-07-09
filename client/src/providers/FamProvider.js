import React, { Component } from 'react';
import axios from 'axios';

const FamContext = React.createContext();

export const FamConsumer = FamContext.Consumer;

class FamProvider extends Component {
  state = { fams: [] }

  componentDidMount() {
    axios.get('/api/fams')
      .then( res => {
        this.setState({ fams: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  addFam= (fam) => {
    axios.post('/api/fams', { fam } )
      .then( res => {
        const { fams } = this.state
        
        this.setState({ fams: [...fams, res.data]})
      })
      .catch( err => {
        console.log(err)
      })
  }

  updateFam = (id, fam) => {
    axios.put(`/api/fams/${id}`, { fam })
      .then( res => {
        const fams = this.state.fams.map( f => {
          if (f.id === id) {
            return res.data
          }
          return f
        })
        this.setState({ fams })
      })
      .catch( err => {
        console.log(err)
      })
  }

  deleteFam = (id) => {
    axios.delete(`/api/fams/${id}`)
      .then( res => {
        const { fams } = this.state
        this.setState({ fams: fams.filter( f => f.id !== id )})
      })
  }

  render() {
    return(
      <FamContext.Provider value={{
        ...this.state,
        addFam: this.addFam,
        updateFam: this.updateFam,
        deleteFam: this.deleteFam,
      }}>
        { this.props.children }
      </FamContext.Provider>
    )
  }
}

export default FamProvider;