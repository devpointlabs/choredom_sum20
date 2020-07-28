import React, { Component } from 'react';
import { FamConsumer } from '../../providers/FamProvider';
import {Modal, Grid } from 'semantic-ui-react';
import FamForm from './FamForm';
import AddUserForm from './AddUserForm';
import { FamGroupConsumer } from '../../providers/FamGroupProvider';
import axios from 'axios';
import FamMember from './FamMember';
import { Box2, StyledGridRow, HeaderText, StyledBox, Header2, StyledButton, StyledContainer, MembersContainer, AdminContainer, ButtonContainer, StyledHeaderContainer } from '../styledComp/FamShowStyles'
import '../../index.css'

class FamShow extends Component {
  state = { editing: false, modalopen: false, members: []}

  componentDidMount() {
    axios.get(`/api/fams/${this.props.location.state.id}/members`)
    .then( res => {
      this.setState({ members: res.data })
    } )
    .catch( err => console.log(err) )
  }

  toggleUpdate = () => this.setState({ editing: !this.state.editing })

  open = () => this.setState({ modalopen: true })
  close = () => this.setState({ modalopen: false })

  render() {
    const { id, user_id, fam_name, fam_admins, fam_members } = this.props.location.state
    const { editing, modalopen, members } = this.state
    const { updateFam, deleteFam, history } = this.props
    return(
      <StyledContainer>
      <Grid columns={1} divided>
        <Grid.Column>
      
      <HeaderText>My Family</HeaderText>
        <br/>
        <StyledGridRow>
          <StyledBox>
            <StyledHeaderContainer>
            <Header2>Family Admins</Header2>
            </StyledHeaderContainer>
            <AdminContainer>
            {members.map( m => m.admin ? <FamMember {...m} /> : "" )}
            </AdminContainer>
            </StyledBox>
            </StyledGridRow>
            <br/>
            <br/>

            <StyledGridRow>
              <Box2>
          <Header2>Family Members</Header2>
          <br/>
          <MembersContainer>
            {members.map( m => m.admin === false || m.admin === null ? <FamMember {...m}  /> : "" )}
          </MembersContainer>
          </Box2>
          </StyledGridRow>
            <br/>
          <Grid.Row>

          <Modal trigger={<StyledButton onClick={() => this.open()}>Add Member</StyledButton>} centered={false} open={modalopen} onClose={this.close}>
                <Modal.Header>New Family Group</Modal.Header>
                <Modal.Content>
                  <AddUserForm fam_id={id} addMember={this.props.addMember} history={history} close={this.close}/>
                </Modal.Content>
              </Modal>
       
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
              <StyledButton onClick={this.toggleUpdate}>
                Edit
              </StyledButton>
            }
              <StyledButton onClick={() => deleteFam(id, history)}>
                Delete
              </StyledButton>

            
              </Grid.Row>
              </Grid.Column>
              </Grid>
          </StyledContainer>
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

const ConnectedFams = ( props ) => (
  < FamGroupConsumer>
    { values => (
      <ConnectedFamShow {...props} { ...values }/>
    )
     }
  </FamGroupConsumer>
)

export default ConnectedFams;