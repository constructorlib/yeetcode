import {
  uzbekistan,
  japan,
  bell,
  avatar2,
  cogwheel,
  addfriend,
  upload,
  bolt,
  fire,
  gold,
  trophy,
} from "assets/icons";
import {
  Container,
  ImgDiv,
  Icon,
  TopWheel,
  PfTop,
  LeftPf,
  RightPf,
  LineFollow,
  IconWheel,
  Button1,
  Button2,
  PfBottom,
  CardWrapper,
  Card,
  CardColumn,
  WrapperI,
} from "./styled";

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
      <hr
        style={{
          marginTop: "15px",
          marginBottom: "5px",
          backgroundColor: "#5fbdff",
        }}
      />
      <CardWrapper>
        <CardColumn>
          <Card>
            <WrapperI>
              <Icon src={fire} alt="fire" />
              <h2 style={{ marginTop: "5px", marginRight: "9px" }}>12</h2>
            </WrapperI>
            <p style={{ marginLeft: "15px" }}>day streak</p>
          </Card>
          <Card>
            <WrapperI>
              <Icon src={gold} alt="goldmedal" />
              <h2 style={{ marginTop: "5px" }}>Gold</h2>
            </WrapperI>
            <p style={{ marginLeft: "15px" }}>Current league</p>
          </Card>
        </CardColumn>
        <CardColumn>
          <Card>
            <WrapperI>
              <Icon src={bolt} alt="bolt" />
              <h2 style={{ marginTop: "5px" }}>5406</h2>
            </WrapperI>
            <p style={{ marginLeft: "15px" }}>Total XP</p>
          </Card>
          <Card>
            <WrapperI>
              <Icon src={trophy} alt="trophy" />
              <h2 style={{ marginTop: "5px" }}>2</h2>
            </WrapperI>
            <p style={{ marginLeft: "15px" }}>Top 3 finishes</p>
          </Card>
        </CardColumn>
      </CardWrapper>
    </Container>
  );
};

export default Profile;
