import SVG from "react-inlinesvg";
import styled from "styled-components";
import { typography } from "styles/";

export const Container = styled.div`
  width: 100dvw;
  height: calc(100dvh - 10rem);
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #31304d;
`;
export const ImgDiv = styled.div`
  width: 100dvw;
  height: 150px;
  border: 1px solid black;
  background-color: #f0ece5;
  overflow: hidden;
  display: flex;
  justify-content: center;
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
`;
export const RightPf = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-evenly;
`;
export const Icon = styled(SVG)`
  width: 3rem;
  height: 3rem;
  color: white;
`;
export const TopWheel = styled.div`
  width: 12px;
  height: 12px;
  position: fixed;
  right: 25px;
  top: 10px;
`;
export const IconWheel = styled(SVG)`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;
export const LineFollow = styled.div`
  display: flex;
  margin-top: 5px;
  text-align: left;
  color: #5fbdff;
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

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
export const CardColumn = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  background-color: #fff;
  height: 80px;
  margin-top: 10px;
  border-radius: 9px;
`;
