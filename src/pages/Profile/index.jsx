import {
  uzbekistan,
  japan,
  bell,
  avatar2,
  cogwheel,
  addfriend,
  upload,
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
      <hr style={{ marginTop: "15px", backgroundColor: "#5fbdff" }} />
    </Container>
  );
};

export default Profile;
