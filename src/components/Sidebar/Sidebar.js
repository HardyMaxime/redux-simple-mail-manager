import React from 'react';
import PropTypes from "prop-types";
import { Checkbox } from "semantic-ui-react";
 
const sidebar = (props) => (
    <div>
        <h3>Filter by </h3>
        <Checkbox toggle label="Show flag mail" onClick={props.showAllFlaggedMail} /> <br />
        <Checkbox toggle label="Show unread mail" onClick={props.showUnreadMail} style={{marginTop:'15px'}}/>
    </div>
)   
 
sidebar.propTypes = {
  showAllFlaggedMail: PropTypes.func.isRequired,
  showUnreadMail: PropTypes.func.isRequired
};

export default sidebar;