import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 400px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 600px) {
      ${props}
    }
  `;
};

export const tabletx = (props) => {
  return css`
    @media only screen and (max-width: 700px) {
      ${props}
    }
  `;
};

export const tab = (props) => {
  return css`
    @media only screen and (max-width: 1000px) {
      ${props}
    }
  `;
};
