import React from 'react';
import { Image, Grid } from 'semantic-ui-react';
import { PText, MemberContainer} from '../styledComp/FamMemberStyles';

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';

const FamMember = ({ user, name, image, }) => (
  <>
    <p> {image} </p>
      <MemberContainer>
      <Grid.Column>
        <Image src={image || defaultImage} 
          circular
          size= 'tiny'
          target='_blank'
        />
        <PText> {name} </PText>
      </Grid.Column>
      </MemberContainer>
  </>
)

export default FamMember;