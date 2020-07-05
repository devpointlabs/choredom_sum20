import React from 'react';
import { FamConsumer } from '../../providers/FamProvider';
import FamForm from './FamForm';
import FamList from './FamList';

const Fams = () => (
  <FamConsumer>
    {
      value => (
        <>
          <h1>Families Page</h1>
          <FamForm addFam={value.addFam} />
          <FamList fams={value.fams} />
        </>
      )
    }
  </FamConsumer>
) 

export default Fams;