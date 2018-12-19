import React, {Component, Fragment} from 'react';
import { Button, Comment, Form, Header } from "semantic-ui-react";
import PropTypes from "prop-types";

class ReplyMail extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = e => this.setState({ message: e.target.value });
  render() {
    return (
      <Fragment>
        <Comment.Group>
          <Header as="h3" dividing>
            Répondre
          </Header>
          {this.props.answersMail.map(answer => (
            <Comment key={answer.id}>
              <Comment.Avatar src={this.props.isUser ? '' : this.props.avatar} />
              <Comment.Content>
                <Comment.Author as="a">{answer.author}</Comment.Author>
                <Comment.Metadata>
                  <div>Today at 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>{answer.message}</Comment.Text>
              </Comment.Content>
            </Comment>
          ))}
          <Form
            reply
            onSubmit={() =>
              this.props.addReplyMessage(this.props.mailId, this.state.message)
            }
          >
            <Form.TextArea onChange={this.handleChange} />
            <Button
              content="Add Reply"
              labelPosition="left"
              icon="edit"
              primary
            />
          </Form>
        </Comment.Group>
      </Fragment>
    );
  }
}


ReplyMail.propTypes = {
  answersMail: PropTypes.instanceOf(Array).isRequired,
  addReplyMessage: PropTypes.func.isRequired,
  avatar: PropTypes.string.isRequired,
  mailId: PropTypes.number.isRequired,
  isUser: PropTypes.bool.isRequired
};
 
export default ReplyMail;