import React from "react";
import { Link, } from 'react-router-dom';
import { Header, Button,  } from "semantic-ui-react";
import FamForm from "../fams/FamForm";

const Initial = () => (
  <>
    <div>
      <Header as='h1'>Welcome to Choredom!</Header>  
    </div>
    <p>To get started, you need to be part of a family group. You can join a family group in multiple ways.</p>
    <p>1. Ask someone in an existing family group to add you by your email.</p>
    <p>2. Start a new family group.</p>
    <div>
      <Button as={Link} to="/familyform">
        Start a family group
      </Button>
    </div>
  </>
)
export default Initial;
