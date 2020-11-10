import React from "react";
import { Link } from "react-router-dom";
import { css, keyframes } from "@emotion/core";
const color = "pink";
const spin = keyframes`
to {
    transform: rotate(360deg);
}`;
const NavBar = () => {
  return (
    <header
      css={css`
        background-color: ${color};
        padding: 15px;
      `}
    >
      <Link to="/">
        <h1 id="something-imortant">Adopt me</h1>
      </Link>
      <span
        role="img"
        aria-label="logo"
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: 1s ${spin} linear infinite;
          &:hover {
            animation: 1s ${spin} linear infinite reverse;
          }
        `}
      >
        🐕
      </span>
    </header>
  );
};

export default NavBar;
