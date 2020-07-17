import React, { Component } from 'react';
import { FamConsumer } from '../../providers/FamProvider';
import { Button, Card, Grid } from 'semantic-ui-react';
import FamForm from './FamForm';

class FamShow extends Component {
  state = { editing: false }

  toggleUpdate = () => this.setState({ editing: !this.state.editing })

  render() {
    const { id, user_id, fam_name, fam_admins, fam_members } = this.props.location.state
    const { editing } = this.state
    const { updateFam, deleteFam, history } = this.props
    return(
      <>
      <Grid.Column>
        <Card>
          <Card.Content header={fam_name} />
          <Card.Content>
            {fam_admins}
          </Card.Content>
          <Card.Content extra>
            {fam_members}
          </Card.Content>
          <Card.Content>
          { editing ?
            <FamForm 
              user_id={user_id}  
              id={id}
              fam_name={fam_name}
              fam_admins={fam_admins}
              fam_members={fam_members}
              updateFam={updateFam}
              toggleUpdate={this.toggleUpdate}
              history={history}
            />
          :
          <Button onClick={this.toggleUpdate}>
            Edit
          </Button>
        }
        <Button onClick={() => deleteFam(id, history)}>
          Delete
        </Button>
          </Card.Content>
        </Card>
      </Grid.Column>
        {/* <h1>{fam_name}</h1>
        <h3>{fam_admins}</h3>
        <h4>{fam_members}</h4> */}
        {/* { editing ?
            <FamForm 
              user_id={user_id}  
              id={id}
              fam_name={fam_name}
              fam_admins={fam_admins}
              fam_members={fam_members}
              updateFam={updateFam}
              toggleUpdate={this.toggleUpdate}
              history={history}
            />
          :
          <Button onClick={this.toggleUpdate}>
            Edit
          </Button>
        }
        <Button onClick={() => deleteFam(id, history)}>
          Delete
        </Button> */}
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