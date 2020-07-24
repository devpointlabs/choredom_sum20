import React from 'react';
import { Image, Grid } from 'semantic-ui-react';

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

const FamMember = ({ user, name, image, }) => (
  <>
    <p> {name} </p>
    <p> {image} </p>
        <Grid.Column width={4}>
          <Image src={image || defaultImage} 
          circular
          size= 'tiny'
          target='_blank'
          />
        </Grid.Column>
  </>
)

export default FamMember;