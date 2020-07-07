import React, { Component } from 'react';
import { FamConsumer } from '../../providers/FamProvider';
import { Button } from 'semantic-ui-react';
import FamForm from './FamForm';

class FamShow extends Component {
  state = { editing: false }

  toggleUpdate = () => this.setState({ editing: !this.state.editing })

  render() {
    const { fam_id, fam_name, fam_admins, fam_members } = this.props.location.state
    const { editing } = this.state
    const { updateFam, deleteFam, history } = this.props
    return(
      <>
        <h1>{fam_name}</h1>
        <h3>{fam_admins}</h3>
        <h4>{fam_members}</h4>
        { editing ?
            <FamForm 
              id={fam_id}
              famName={fam_name}
              famAdmins={fam_admins}
              famMembers={fam_members}
              updateFam={updateFam}
              toggleUpdate={this.toggleUpdate}
              history={history}
            />
          :
          <Button onClick={this.toggleUpdate}>
            Edit
          </Button>
        }
        <Button onClick={() => deleteFam(fam_id, history)}>
          Delete
        </Button>
      </>
    )
  }
}

const ConnectedFamShow = (props) => (
  <FamConsumer>
    { value => (
      <FamShow 
        {...props} 
        updateFam={value.updateFam} 
        deleteFam={value.deleteFam}
      />
    )}
  </FamConsumer>
)

export default ConnectedFamShow;