import React, { Component } from 'react'
import { AuthConsumer, } from "../../providers/AuthProvider";
import { Menu, Button, Modal, Accordion, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import { Image, Divider } from 'semantic-ui-react';
import Fams from '../fams/Fams';
import Profile from '../auth/Profile'


class WideModal extends Component {
  state = { open: false }

  show = (size) => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <>
        <Button onClick={this.show('fullscreen')}>My Families</Button>
          <Modal size={size} open={open} onClose={this.close} centered={false}>
            <Modal.Header>My Families</Modal.Header>
            <Modal.Content>
              <Fams/>
            </Modal.Content>
          </Modal>
        </>
    )
  }
}

class Navbar extends Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
          <Divider />
          <Link to='/profile'>
            <Image class='userimage'
              src={user.image}
              as='a'
              size='mini'
              
              circular
            />
          </Link>
          <Menu.Item>
            <Modal trigger={<Button>My Families</Button>} centered={false}>
              <Modal.Header>My Families</Modal.Header>
                <Modal.Content>
                  < Fams />
                </Modal.Content>
            </Modal>
          </Menu.Item>
          <Menu.Item>
            <WideModal/>
          </Menu.Item>

        
          
          {/* <Link to='/fams'>
            <Menu.Item
              id='myfams'
              name='My Families'
              active={location.pathname === '/myfams'}
            />
          </Link> */}


        {/* <Menu.Item>
        <Button>
            <Accordion>
              <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}>
                My Families
                </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <p> These are my families</p>
              </Accordion.Content>
              </Accordion>
          </Button>
        </Menu.Item> */}

        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
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
          <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
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