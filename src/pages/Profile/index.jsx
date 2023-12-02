import styled from "styled-components";
import { uzbekistan, japan, bell } from "assets/icons";
import SVG from "react-inlinesvg";

const Container = styled.div`
  width: 100dvw;
  height: calc(100dvh - 10rem);

  display: flex;
  flex-direction: column;

  position: relative;
  background-color: var(--secondary-bg);
`;
const ImgDiv = styled.div`
  width: 100dvw;
  height: 150px;
  border: 1px solid black;
  background-color: #fff;
`;
const Img = styled.div`
  width: 100dvw;
  background-size: cover;
`;
const PfTop = styled.div`
  width: 100dvw;
  display: flex;
  justify-content: space-evenly;
`;
const LeftPf = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  text-align: left;
`;
const RightPf = styled.div`
  width: 45%;
  display: flex;
  border: 1px solid red;
  justify-content: space-evenly;
`;
export const Icon = styled(SVG)`
  width: 3rem;
  height: 3rem;
`;
const Profile = () => {
  return (
    <Container>
      <ImgDiv>
        <Img>Smart kid stock photo</Img>
      </ImgDiv>
      <PfTop>
        <LeftPf>
          <h2 style={{ color: "white" }}>Azizbek</h2>
          <p style={{ fontSize: "12px" }}>typosbro</p>
          <p style={{ fontSize: "12px" }}>coolcoder@gmail.com</p>
        </LeftPf>
        <RightPf>
          <Icon src={uzbekistan} alt="uzbekistan" />
          <Icon src={japan} alt="japan" />
          <Icon src={bell} alt="bell" />
        </RightPf>
      </PfTop>
    </Container>
  );
};

export default Profile;
