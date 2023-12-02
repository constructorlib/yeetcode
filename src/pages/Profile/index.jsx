import styled from "styled-components";
import {
  uzbekistan,
  japan,
  bell,
  avatar2,
  cogwheel,
  addfriend,
  upload,
} from "assets/icons";
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
          <IconWheel src={cogwheel} alt="cogwheel" />
        </TopWheel>
      </ImgDiv>
      <PfTop>
        <LeftPf>
          <h1 style={{ color: "white" }}>Azizbek</h1>
          <p style={{ fontSize: "15px", color: "lightgrey" }}>typosbro</p>
          <p style={{ fontSize: "15px", color: "lightgrey" }}>
            coolcoder@gmail.com
          </p>
          <LineFollow>
            <p style={{ marginRight: "5px", fontSize: "15px" }}>
              31 Following{" "}
            </p>
            <p style={{ fontSize: "15px" }}> 8 Followers</p>
          </LineFollow>
        </LeftPf>
        <RightPf>
          <Icon src={uzbekistan} alt="uzbekistan" />
          <Icon src={japan} alt="japan" />
          <Icon src={bell} alt="bell" />
        </RightPf>
      </PfTop>
      <PfBottom>
        <Button1>
          <IconWheel src={addfriend} alt="cogwheel" />
          <h2>ADD FRIEND</h2>
        </Button1>
        <Button2>
          <IconWheel style={{ color: "white" }} src={upload} alt="upload" />
        </Button2>
      </PfBottom>
      <hr style={{ marginTop: "15px", backgroundColor: "#5fbdff" }} />
    </Container>
  );
};

export default Profile;
