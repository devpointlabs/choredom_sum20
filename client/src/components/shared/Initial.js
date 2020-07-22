import React, { Component } from "react";
import { Header, Button, Modal } from "semantic-ui-react";
import FamForm from "../fams/FamForm";
import { Link,} from 'react-router-dom';
import Fams from '../fams/Fams';
import { FamConsumer } from '../../providers/FamProvider';

const Initial = () => (
  <>
    <div>
      <Header as='h1'>Welcome to Choredom!</Header>  
    </div>
    <p>To get started, you need to be part of a family group. You can join a family group in multiple ways.</p>
    <p>1. Ask someone in an existing family group to add you by your email.</p>
    <p>2. Start a new family group.</p>
    <div>
      <Fams/>
    </div>
  </>
)
export default Initial;