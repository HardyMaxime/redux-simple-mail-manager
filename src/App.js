import React, { Component, Fragment } from 'react';
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import Layout from './hoc/Layout/Layout'
import PageMail from './containers/PageMail/PageMail'
import {flagHandler, deleteMail} from './store/actions/index'


class App extends Component {
  state = {

  }
  render() {
    return <Fragment>
        <Switch>
          <Route path="/mail/:id" render={props => {
              const mailId = parseInt(props.match.params.id, 10);
              const mail = this.props.mails.find(el => el.id === mailId);
              return mail ? <PageMail mail={mail} filterFlag={this.props.flagHandler} deleteMail={this.props.deleteMail} /> : <h1
                >
                  404 : Page not found
                </h1>;
            }} />
          <Route path="/" exact component={Layout} />
          <Redirect to="/" />
        </Switch>
      </Fragment>;
  }
}

const mapStateToProps = state => ({
  mails: state.mails
});


const mapDispatchToProps = dispatch => ({
  flagHandler : (id, flag) => dispatch(flagHandler(id, flag)),
  deleteMail : id => dispatch(deleteMail(id))
});

App.propTypes = {
  mails: PropTypes.instanceOf(Array).isRequired,
  flagHandler: PropTypes.func.isRequired,
  deleteMail: PropTypes.func.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
