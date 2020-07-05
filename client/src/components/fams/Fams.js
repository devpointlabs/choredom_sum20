import React from 'react';
import { FamConsumer } from '../../providers/FamProvider';
import FamForm from './FamForm';
import FamList from './FamList';

const Fams = () => (
  <FamConsumer>
    {
      value => (
        <>
          <h1>Create Family Group</h1>
          <FamForm addFam={value.addFam} />
          <FamList fams={value.fams} />
        </>
      )
    }
  </FamConsumer>
) 

export default Fams;