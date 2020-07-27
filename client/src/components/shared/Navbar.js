import React, { Component } from 'react'
import { AuthConsumer, } from "../../providers/AuthProvider";
import { Menu, Button, Modal, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import { Image, Divider } from 'semantic-ui-react';
import Fams from '../fams/Fams';
import Logo from '../../images/Logo.svg';
import styled from 'styled-components'
import { SegmentText } from '../styledComp/DashStyles';

const LogoImg = styled.img`
  width: 167px;
  height: 31px;
`;

const MenuItem = styled(Menu.Item)`
  font-family: Work Sans;
  color: black;
`
const StyledButton = styled(Button)`
  font-family: Work Sans !Important;
  `


const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

class Navbar extends Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    if (user) {
      return (
        <Menu.Menu position='right'>
          {
            user.admin ?
              <Link to='/admindash'>
                <MenuItem
                  id='dashboard'
                  name='dashboard'
                  active={location.pathname === '/admindash'}
                />
              </Link>
              :
            <Link to='/userdash' >
              <MenuItem
                id='dashboard'
                name='dashboard'
                active={location.pathname === '/userdash'}
              />
            </Link>
          }
          <Link to='/earn'>
            <MenuItem
              id='earn'
              name='Earn'
              active={location.pathname === '/earn'}
            />
          </Link>
          <Link to='/spend'>
            <MenuItem
              id='spend'
              name='Spend'
              active={location.pathname === '/spend'}
            />
          </Link>
          <Divider />
          <Link to='/profile'>
            <Image class='userimage'
              src={user.image || defaultImage}
              as='a'
              size='mini'
              circular
            />
          </Link>
          <MenuItem>
            <Modal trigger={<StyledButton>My Families</StyledButton>} centered={false}>
                <Modal.Content>
                  <SegmentText>My Families</SegmentText>
                  < Fams />
                </Modal.Content>
            </Modal>
          </MenuItem>
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <MenuItem
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <MenuItem
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/admindash'>
            < LogoImg src={Logo} />
            {/* <Menu.Item
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            /> */}
          </Link>
            { this.rightNavItems() }
        </Menu>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);