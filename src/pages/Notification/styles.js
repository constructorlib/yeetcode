import SVG from "react-inlinesvg";
import styled from "styled-components";

export const Container = styled.div`
  width: 100dvw;
  height: calc(100dvh - 10rem);
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #31304d;
`;

export const Toph1 = styled.div`
  width: 100dvw;
  height: 50px;
  border-bottom: 1px solid #635985;
  color: #635985;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MidWrapper = styled.div`
  width: 100dvw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const FeedCard = styled.div`
  width: 90%;
  height: 200px;
  background-color: white;
  margin-top: 10px;
  border-radius: 5px;
`;
