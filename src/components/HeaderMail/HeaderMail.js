import React from "react";
import { Container } from "semantic-ui-react";

const headerStyle = {
  width: "100%",
  height: "180px",
  backgroundColor: "#41B3E4",
  marginBottom : '30px'
};

const HeaderMail = () => (
    <Container textAlign="center" style={headerStyle}>
        <h1 style={{color:'#fff'}} >Mail</h1>
    </Container>)

export default HeaderMail;
