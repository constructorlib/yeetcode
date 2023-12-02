import styled from "styled-components";
import { uzbekistan, japan, bell, avatar2, cogwheel } from "assets/icons";
import SVG from "react-inlinesvg";

const Container = styled.div`
  width: 100dvw;
  height: calc(100dvh - 10rem);

  display: flex;
  flex-direction: column;

  position: relative;
  background-color: #31304d;
`;
const ImgDiv = styled.div`
  width: 100dvw;
  height: 150px;
  border: 1px solid black;
  background-color: #f0ece5;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const PfTop = styled.div`
  width: 100dvw;
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
`;
const LeftPf = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const RightPf = styled.div`
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
const Profile = () => {
  return (
    <Container>
      <ImgDiv>
        <img
          style={{
            objectFit: "cover",
            width: "150px",
            height: "150px",
          }}
          src={avatar2}
          alt="profile"
        />
        <TopWheel>
          <IconWheel src={cogwheel} alt="bell" />
        </TopWheel>
      </ImgDiv>
      <PfTop>
        <LeftPf>
          <h2 style={{ color: "white" }}>Azizbek</h2>
          <p style={{ fontSize: "12px", color: "lightgrey" }}>typosbro</p>
          <p style={{ fontSize: "12px", color: "lightgrey" }}>
            coolcoder@gmail.com
          </p>
          <LineFollow>
            <p style={{ marginRight: "5px" }}>31 Following </p>
            <p> 8 Followers</p>
          </LineFollow>
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
