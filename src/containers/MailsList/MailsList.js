import React, { Component } from 'react'
import PropTypes from "prop-types";

import {connect} from 'react-redux'
import { flagHandler, deleteMail, readHandler, initData } from "./../../store/actions/index";
import MailCard from './../../components/MailCard/MailCard'


class MailsList extends Component {
  state = {
    render: false
  };
  componentWillMount() {
        this.props.fetchAllMails()
  }

  render() {
    return <div>
        {this.props.mails
          .filter(mail =>
            mail.title
              .toLowerCase()
              .includes(this.props.filterString.toLowerCase())
          )
          .filter(mail => (this.props.filterFlag ? mail.flag : mail))
          .filter(mail => this.props.filterReadMail ? !mail.read : mail)
          .map(mail => (
            <MailCard
              key={mail.id}
              mail={mail}
              filterFlag={this.props.flagHandler}
              deleteMail={this.props.deleteMail}
              filterReadMail={this.props.readHandler}
            />
          ))}
      </div>;
  }
}

const mapStateToProps = state => ({
  mails: state.mails,
  filterString: state.filterString,
  filterFlag: state.filterFlag,
  filterReadMail: state.filterRead
});

const mapDispatchToProps = dispatch => ({
  flagHandler: (id, flag) => dispatch(flagHandler(id, flag)),
  readHandler: (id) => dispatch(readHandler(id)),
  deleteMail: id => dispatch(deleteMail(id)),
  fetchAllMails : () => dispatch(initData())
});

MailsList.propTypes = {
  mails: PropTypes.instanceOf(Array).isRequired,
  filterString: PropTypes.string.isRequired,
  filterFlag: PropTypes.bool.isRequired,
  filterReadMail: PropTypes.bool.isRequired,
  flagHandler: PropTypes.func.isRequired,
  readHandler: PropTypes.func.isRequired,
  deleteMail: PropTypes.func.isRequired,
  fetchAllMails: PropTypes.func.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(MailsList);