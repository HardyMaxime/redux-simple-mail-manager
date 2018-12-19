import React, {Component} from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Button, Icon, Grid, Container } from "semantic-ui-react";
import Mail from "./../../components/Mail/Mail"
import ReplyMail from "./../ReplyMail/ReplyMail"
import { addReplyMessage } from "./../../store/actions/index";

 
class PageMail extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
    <Container>
      <Button animated floated="left" onClick={() => this.props.history.push("/")}>
        <Button.Content visible>Back</Button.Content>
        <Button.Content hidden>
          <Icon name="left arrow" />
        </Button.Content>
      </Button>
      <Button
        basic
        color="orange"
        animated
        floated="right"
        onClick={() => {
          this.props.history.push("/");
          this.props.deleteMail(this.props.mail.id);
        }}
      >
        <Button.Content visible>Delete</Button.Content>
        <Button.Content hidden>
          <Icon name="delete" />
        </Button.Content>
      </Button>
      <Button
        color={this.props.mail.flag ? "red" : "grey"}
        floated="right"
        icon
        onClick={() => this.props.filterFlag(this.props.mail.id, this.props.mail.flag)}
      >
        <Icon name="flag" />
      </Button>
      <Grid container style={{marginTop : '40px'}} >
        <Grid.Row>
          <Mail mail={this.props.mail} />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <ReplyMail isUser={this.props.mail.isUser} mailId={this.props.mail.id} addReplyMessage={this.props.addReplyMessage} avatar={this.props.mail.cheminImage} answersMail={this.props.mail.reply} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    )
  }
} 

const mapDispatchToProps = dispatch => ({
  addReplyMessage: (id, message) => dispatch(addReplyMessage(id, message))
});

PageMail.propTypes = {
  mail: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  filterFlag: PropTypes.func.isRequired,
  deleteMail: PropTypes.func.isRequired,
  addReplyMessage: PropTypes.func.isRequired
};

export default withRouter(connect(null, mapDispatchToProps)(PageMail));