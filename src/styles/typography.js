import { css } from "styled-components";

//! ********************DISCLAIMER********************
//*  If we change the rule, and use rem again, see: src/styles/Reset.js
//! ********************DISCLAIMER********************

//^ HEADER
const headingXl = css`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  line-height: 40px;
  font-size: 32px;
`;

const headingLg = css`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  line-height: 32px;
  font-size: 28px;
`;
const headingMd = css`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  line-height: 32px;
  font-size: 24px;
`;

const headingSm = css`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  line-height: 24px;
  font-size: 20px;
`;

//& BODY
const body_semibold = css`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  line-height: 20px;
  font-size: 14px;
`;

const body_regular = css`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  line-height: 20px;
  font-size: 14px;
`;

//& CAPTION
const captionMd = css`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  line-height: 20px;
  font-size: 14px;
`;

const captionMd_semibold = css`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  line-height: 20px;
  font-size: 14px;
`;

const captionSm_semibold = css`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  line-height: 16px;
  font-size: 12px;
`;

const captionSm = css`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  line-height: 16px;
  font-size: 12px;
`;

//& DISPLAY
const displayLg = css`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  line-height: 32px;
  font-size: 28px;
`;

const displayMd = css`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  line-height: 20px;
  font-size: 16px;
`;

//& BUTTON
const buttonLg = css`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  letter-spacing: 1px;
`;

const buttonMd = css`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  line-height: 20px;
  font-size: 14px;
`;

export default {
  headingXl,
  headingLg,
  headingMd,
  headingSm,
  body_semibold,
  body_regular,
  captionMd,
  captionMd_semibold,
  captionSm_semibold,
  captionSm,
  displayLg,
  displayMd,
  buttonLg,
  buttonMd,
};
