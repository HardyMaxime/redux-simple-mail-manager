import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
import { Item, Button, Icon, Divider } from "semantic-ui-react";
 
const mailCard = props => (
  <Item.Group>
    <Item>
      <Item.Image size="small" src={props.mail.cheminImage} />
      <Item.Content>
        <Item.Header style={{ width: "100%" }}>
          <Link to={`/mail/${props.mail.id}`}>
            <span
              role="button"
              onClick={() =>
                props.filterReadMail(props.mail.id)
              }
              style={{ color: props.mail.read ? "purple" : "#4183c4" }}>
              {props.mail.title}
            </span>
          </Link>
          <Button
            floated="right"
            size="mini"
            basic
            icon
            onClick={() => props.deleteMail(props.mail.id)}
          >
            <Icon name="delete" />
          </Button>
          <Button
            color={props.mail.flag ? "red" : "grey"}
            floated="right"
            size="mini"
            basic
            icon
            onClick={() => props.filterFlag(props.mail.id, props.mail.flag)}
          >
            <Icon name="flag" />
          </Button>
        </Item.Header>
        <Item.Meta>
          <span className="from">from : {props.mail.from}</span>
        </Item.Meta>
        <Item.Description>{props.mail.content}</Item.Description>
        <Item.Meta>
          <span className="date">Today at {props.mail.date} pm</span>
        </Item.Meta>
      </Item.Content>
    </Item>
    <Divider />
  </Item.Group>
);

mailCard.propTypes = {
  mail: PropTypes.instanceOf(Object).isRequired,
  filterFlag: PropTypes.func.isRequired,
  deleteMail: PropTypes.func.isRequired,
  filterReadMail : PropTypes.func.isRequired
};
 
export default mailCard;