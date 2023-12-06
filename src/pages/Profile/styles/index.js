import SVG from "react-inlinesvg";
import styled from "styled-components";
import { typography } from "styles/";

export const Container = styled.div`
  width: 100dvw;
  height: calc(100dvh - 10rem);
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: var(--dark-bg);
`;
export const Image = styled.img`
  width: 100dvw;
  height: 20rem;
  object-fit: contain;
  background-color: #b6e3f4;
`;

export const PfTop = styled.div`
  width: 100dvw;
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
`;
export const LeftPf = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  text-align: left;
  color: lightgrey;
  font-size: 15px;
`;

export const RightPf = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-evenly;
`;
export const Icon = styled(SVG)`
  width: 2.5rem;
  height: 2.5rem;
`;
export const TopWheel = styled.div`
  width: 12px;
  height: 12px;
  right: 25px;
  top: 10px;
`;
export const IconWheel = styled(SVG)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;
export const LineFollow = styled.div`
  display: flex;
  font-size: 15px;
  margin-top: 5px;
  color: #5fbdff;
  width: 105%;
  justify-content: space-evenly;
`;
export const Paragraph = styled.div`
  margin-right: 5px;
`;
export const PfBottom = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;
export const Button1 = styled.div`
  color: #5fbdff;
  cursor: pointer;
  border: 1px solid #5fbdff;
  width: 55%;
  border-radius: 5px;
  text-align: center;
  padding: 5px;
  display: flex;
  justify-content: space-evenly;
  height: 35px;
  box-shadow: 4px 4px black;
`;
export const Button2 = styled.div`
  color: #5fbdff;
  cursor: pointer;
  border: 1px solid #5fbdff;
  height: 35px;
  width: 20%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding: 5px;
  box-shadow: 4px 4px black;
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
