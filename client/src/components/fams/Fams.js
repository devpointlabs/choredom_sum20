import React, { Component } from 'react';
import { FamConsumer } from '../../providers/FamProvider';
import FamForm from './FamForm';
import FamList from './FamList';
import { Button, Modal, Grid, Segment, } from 'semantic-ui-react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { withRouter } from  'react-router-dom';
import styled from 'styled-components'
import { SegmentText } from '../styledComp/DashStyles';

const StyledButton = styled.button`
  height: 100px;  
  font-family: Work Sans;
  background-color: #E0E0E0!important;
  color: black;
  font-size: 14px;
	outline: none;
	border: none;
	cursor: pointer;
  `
  const StyledSegment = styled(Segment)`
  height: 132px;
  background-color: #E0E0E0!important;
  border: 1px white !important;
  border-radius: 16px !important;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .16), 0 4px 10px 0 rgba(0, 0, 0, 0.16) !important;
  `

class Fams extends Component {
  state = { modalopen: false, }
  
  componentDidMount() {
    const { getAllFams, user } = this.props
    getAllFams(user.id)
  }
  
  open = () => this.setState({ modalopen: true })
  close = () => this.setState({ modalopen: false })

  render () {
    const { fams, addFam, user, history } = this.props
    const { modalopen } = this.state
    return (
      <>
        <Grid columns={5} padded doubling>
          <FamList fams={fams} />
          <Grid.Column>
            <StyledSegment>
              <Modal trigger={<StyledButton onClick={() => this.open()}>Start a new family group</StyledButton>} centered={false} open={modalopen} onClose={this.close}>
                  <Modal.Content>
                    <SegmentText>New Family Group</SegmentText>
                    <FamForm addFam={addFam} userId={user.id} history={history} close={this.close}/>
                  </Modal.Content>
                </Modal>
              </StyledSegment>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}

const SecondaryFams = (props) => (
  <FamConsumer>
    {
      values => (
        <Fams {...props} { ...values }/>
      )
    }
  </FamConsumer>
)

const ConnectedFams = ( props ) => (
  < AuthConsumer>
    { values => (
      <SecondaryFams {...props} { ...values }/>
    )
     }
  </AuthConsumer>
)

export default withRouter(ConnectedFams);