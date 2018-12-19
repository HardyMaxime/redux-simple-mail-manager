import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";

import { connect } from 'react-redux'
import { onTextChange, showAllFlaggedMail, showUnreadMail } from "./../../store/actions/index";

import HeaderMail from './../../components/HeaderMail/HeaderMail'
import MailsList from './../../containers/MailsList/MailsList'
import Search from './../../components/Search/Search'
import Sidebar from './../../components/Sidebar/Sidebar'
 
class Layout extends React.Component {
    state = {
      render : false
    }
    render() {
        return <Fragment>
            <HeaderMail />
            <Grid container stackable columns={2}>
              <Grid.Column width={5}>
                <Sidebar showAllFlaggedMail={this.props.showAllFlaggedMail} showUnreadMail={this.props.showUnreadMail} />
              </Grid.Column>
              <Grid.Column width={11}>
                <Search onTextChange={this.props.onTextChange} />
                <MailsList />
              </Grid.Column>
            </Grid>
          </Fragment>;
    }
}

const mapStateToProps = (state) => ({
  filterString : state.filterString,
})

const mapDispatchToProps = dispatch => ({
  onTextChange: value => dispatch(onTextChange(value)),
  showAllFlaggedMail: () => dispatch(showAllFlaggedMail()),
  showUnreadMail: () => dispatch(showUnreadMail())
});

Layout.propTypes = {
  onTextChange: PropTypes.func.isRequired,
  showAllFlaggedMail: PropTypes.func.isRequired,
  showUnreadMail: PropTypes.func.isRequired
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Layout);