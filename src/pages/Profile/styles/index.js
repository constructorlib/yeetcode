import { ButtonBase } from "@mui/material";
import SVG from "react-inlinesvg";
import styled, { css } from "styled-components";
import { typography } from "styles/";
import { PersonAddAlt, PersonRemoveAlt1 } from "styled-icons/material-rounded/";
import { Upload } from "styled-icons/bootstrap/";

export const Container = styled.div`
  width: 100dvw;
  height: calc(100dvh - 10rem);
  display: flex;
  flex-direction: column;
  background-color: var(--dark-bg);
  color: var(--dark-text);
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  gap: 1rem;

  position: relative;

  border-bottom: 3px solid var(--dark-btn-inactive);
`;

export const Title = styled.div`
  ${typography.displayLg}
  width: 100%;
`;
export const Subtitle = styled.div`
  ${typography.captionMd}
`;
export const Span = styled.div`
  color: var(--secondary-text);
  ${typography.displayMd}
  letter-spacing: .2px;
`;

export const Button = styled(ButtonBase)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: max-content;
  padding: 1.5rem 2rem;
  border-radius: 1.5rem;
  background-color: transparent;
  border: 2px solid var(--dark-btn-inactive);
  border-bottom-width: 4px;
  color: var(--secondary-text);
  ${typography.buttonLg}
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;
  :first-child {
    flex-grow: 1;
  }
`;

const iconCss = css`
  width: 2.5rem;
  height: 2.5rem;
`;
export const UploadIcon = styled(Upload)`
  ${iconCss}
`;
export const AddIcon = styled(PersonAddAlt)`
  ${iconCss}
`;

export const RemoveIcon = styled(PersonRemoveAlt1)`
  ${iconCss}
`;
export const Image = styled.img`
  width: 100dvw;
  height: 20rem;
  object-fit: contain;
  background-color: #b6e3f4;
`;

export const Icon = styled(SVG)`
  width: 2.5rem;
  height: 2.5rem;
`;
export const Settings = styled(SVG)`
  position: absolute;
  right: 2rem;
  top: 2rem;
  width: 3.5rem;
  height: 3.5rem;

  cursor: pointer;

  path {
    fill: var(--dark-btn-inactive);
  }
`;

export const CourseList = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: absolute;
  top: 2rem;
  right: 1rem;
`;
export const CourseIcon = styled(SVG)`
  width: 3rem;
  height: 3rem;
`;
export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  padding: 2rem 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  min-width: max-content;
  width: calc((100% - 2rem) / 2);
  padding: 1rem 2rem;

  border-radius: 1rem;
  border: 3px solid var(--dark-btn-inactive);
`;
export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  ${typography.displayMd}
  color: var(--dark-text);
  gap: 1rem;
`;
export const CardSubtitle = styled.div`
  color: var(--dark-btn-text-inactive);
  text-transform: capitalize;
  margin-left: 3rem;
  ${typography.captionSm_semibold}
`;
