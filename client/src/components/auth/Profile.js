import React, { Fragment, } from 'react';
import { AuthConsumer, } from "../../providers/AuthProvider";
import { Form, Grid, Image, Container, Divider, Header, Button, Menu } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router-dom'
import { HeaderText, PText, ProfilePicContainer } from '../styledComp/ProfileStyles';

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

class Profile extends React.Component {
  state = { editing: false, formValues: { name: '', email: '', file: '', }, };
  
  componentDidMount() {
    const { auth: { user: { name, email, }, }, } = this.props;
    this.setState({ formValues: { name, email, }, });
  }
  
  toggleEdit = () => {
    this.setState( state => {
      return { editing: !state.editing, };
    })
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({
      formValues: {
        ...this.state.formValues,
        [name]: value,
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { formValues: { name, email, file, }, } = this.state;
    const { auth: { user, updateUser, }, } = this.props;
    updateUser(user.id, { name, email, file, });
    this.setState({
      editing: false,
      formValues: {
        ...this.state.formValues,
        file: "",
      },
    });
  }  
  
  profileView = () => {
    const { auth: { user }, } = this.props;
    return (
      <Grid>
        <Grid.Column>
          <Grid.Row>
          <br/>
          <br/>
          <ProfilePicContainer>
          <Image src={user.image || defaultImage} 
          circular
          border-color='blue'
          size= 'small'
          target='_blank'
          as='a'
          />
          </ProfilePicContainer>
          </Grid.Row>
          <br/>
          <br/>
          <Grid.Row>
          <HeaderText>{user.name}</HeaderText>
          </Grid.Row>
          <br/>
          <br/>
          <Grid.Row>
          <HeaderText>{user.email}</HeaderText>
          </Grid.Row>
        </Grid.Column>
        </Grid>
    )
  }

  onDrop = (files) => {
    this.setState({ formValues: { ...this.state.formValues, file: files[0], } });
  }
  
  editView = () => {
    const { auth: { user }, } = this.props;
    const { formValues: { name, email, file } } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Grid.Column width={4}>
        <Grid.Column width={4}>
        <Dropzone
          onDrop={this.onDrop}
          multiple={false}
          >
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div
                {...getRootProps()}
                style={styles.dropzone}
                >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop files here...</p> :
                    <p>Try dropping some files here, or click to select files to upload.</p>
                }
              </div>
            )
          }}
        </Dropzone>
        </Grid.Column>
        </Grid.Column>
        <Grid.Column width={8}>
          <Form.Input
            label="Name"
            name="name"
            value={name}
            required
            onChange={this.handleChange}
          />
          <Form.Input
            label="Email"
            name="email"
            value={email}
            required
            onChange={this.handleChange}
          />
          <Button>Update</Button>
        </Grid.Column>
      </Form>
    )
  }
  
  render() {
    const { editing, } = this.state;
    const { handleLogout, history } = this.props.auth;
    return (
    
        <Grid>
          <Grid.Row>
            { editing ? this.editView() : this.profileView()}
            <Grid.Column>
              <Button onClick={this.toggleEdit}>{editing ? 'Cancel' : 'Edit'}</Button>
            </Grid.Column>
            <Grid.Column>
            <Button onClick={ () => handleLogout(history) }>logout</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
 
    )
  }
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { auth => 
      <Profile { ...props } auth={auth} />
    }
  </AuthConsumer>
)

const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}

export default ConnectedProfile;