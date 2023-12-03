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
  testU,
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
  Paragraph,
  ParaInWrap,
  H1InWrap,
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
          <Paragraph>typosbro</Paragraph>
          <Paragraph>coolcoder@gmail.com</Paragraph>
          <LineFollow>
            <Paragraph>31 Following {"    "}</Paragraph>
            <Paragraph> 8 Followers</Paragraph>
          </LineFollow>
        </LeftPf>
        <RightPf>
          <Icon src={uzbekistan} alt="uzbekistan" />
          <Icon src={japan} alt="japan" />
          <Icon src={bell} alt="bell" />
        </RightPf>
      </PfTop>
      <PfBottom>
        {/* CHANGE THIS PART HERE
          When I push with inline css, they push apart for some reason. 
          In styled.js it's set to space-evenly  
        */}
        <Button1>
          <IconWheel src={addfriend} alt="cogwheel" />
          <h2 style={{ marginRight: "15px" }}>ADD FRIEND</h2>
        </Button1>
        <Button2>
          {/* CHANGE THIS TOO */}
          <IconWheel src={testU} alt="upload" />
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
              <H1InWrap>12</H1InWrap>
            </WrapperI>
            <ParaInWrap>day streak</ParaInWrap>
          </Card>
          <Card>
            <WrapperI>
              <Icon src={gold} alt="goldmedal" />
              <H1InWrap>Gold</H1InWrap>
            </WrapperI>
            <ParaInWrap>Current league</ParaInWrap>
          </Card>
        </CardColumn>
        <CardColumn>
          <Card>
            <WrapperI>
              <Icon src={bolt} alt="bolt" />
              <H1InWrap>5406</H1InWrap>
            </WrapperI>
            <ParaInWrap>Total XP</ParaInWrap>
          </Card>
          <Card>
            <WrapperI>
              <Icon src={trophy} alt="trophy" />
              <H1InWrap>2</H1InWrap>
            </WrapperI>
            <ParaInWrap>Top 3 finishes</ParaInWrap>
          </Card>
        </CardColumn>
      </CardWrapper>
    </Container>
  );
};

export default Profile;
