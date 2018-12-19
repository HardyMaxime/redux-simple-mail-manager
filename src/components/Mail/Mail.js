import React,{Fragment} from 'react';
import PropTypes from "prop-types";
import { Grid, Header, Image } from "semantic-ui-react";
 
const mail = (props) => (
       <Fragment>
        <Grid.Column width={5}>
            <Image src={props.mail.cheminImage} fluid />
        </Grid.Column>
        <Grid.Column width={11}>
            <Header as='h2'>
              {props.mail.from}
                <Header.Subheader>
                {props.mail.title}
                </Header.Subheader>
            </Header>
            <p>
                {props.mail.content}
            </p>
            <p>
                Today at {props.mail.date} pm.
            </p>
        </Grid.Column>
       </Fragment>
    )
mail.propTypes = {
  mail: PropTypes.instanceOf(Object).isRequired
};
 
export default mail;