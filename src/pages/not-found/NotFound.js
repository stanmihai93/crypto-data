import React from "react";
import { Link } from "react-router-dom";
import { ReturnButton, NotFoundContainer } from "./NotFoundStyle";
const NotFound = () => (
  <NotFoundContainer>
    <h1>404 - Not Found!</h1>
    <Link to="/">
      <ReturnButton>Go Home</ReturnButton>
    </Link>
  </NotFoundContainer>
);

export default NotFound;
