import React from 'react';
import { Input } from "semantic-ui-react";
import PropTypes from "prop-types";

const search = props => (
  <Input
    focus
    placeholder="Search..."
    icon="search"
    onKeyUp={e => props.onTextChange(e.target.value)}
    style={{ width: "100%", marginBottom: "20px" }}
  />
);

search.propTypes = {
  onTextChange : PropTypes.func.isRequired
};

export default search;