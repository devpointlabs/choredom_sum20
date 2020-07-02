import React from 'react'
import {AuthConsumer, } from "../../providers/AuthProvider";
import { Navbar, Nav, } from 'react-bootstrap'
import {Link, withRouter, } from 'react-router-dom'

class NavMenu extends React.Component{

  rightNavItems = () => {
    const { auth: {user, handleLogout, }, location, } = this.props;
    if (user) {
      return(
        <Nav>
          <Nav.Link onClick={ () => handleLogout(this.props.history)}>
            Logout
          </Nav.Link>
        </Nav>
      )
    } else {
      return (
        <Nav>
          <Link to='/login'>
            <Nav.Link>Login</Nav.Link>
          </Link>
          <Link to='/register'>
            <Navbar.Link>
              Register
            </Navbar.Link>
          </Link>
        </Nav>
      )
    }
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Brand> 
            <Link to='/'>
              Choredom
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
              { this.rightNavItems() }
          </Navbar.Collapse>
          </Navbar>
        </div>
    )
  }
}

class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth =>
          <NavMenu {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}
  


///

{/* <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Choredom</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#login">Login</Nav.Link>
      <Nav.Link href="#logout">Logout</Nav.Link>
      <Nav.Link href="#register">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar> */}


export default withRouter(ConnectedNavbar);