import React, { Component } from "react";
import { Grid, GridColumn, Button } from "semantic-ui-react";
import FamForm from "../fams/FamForm";
import { Link,} from 'react-router-dom';
import Fams from '../fams/Fams';
import { FamConsumer } from '../../providers/FamProvider';
import { HeaderText, PText, StyledDivide } from "../styledComp/InitialStyles";

const Initial = () => (
  <>
    <StyledDivide>
    <div>
      <HeaderText>Welcome to Choredom!</HeaderText>  
    </div>
    <br/>
    <PText>To get started, you need to be part of a family group. You can join a family group in multiple ways.</PText>
    <PText>1. Ask someone in an existing family group to add you by your email.</PText>
    <PText>2. Start a new family group by clicking on My Families in the navbar.</PText>
     </StyledDivide>
  </>
  
)

export default Initial;