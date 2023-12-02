import styled from "styled-components";

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
`;
const LeftPf = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;
const Profile = () => {
  return (
    <Container>
      <ImgDiv>
        <Img>Smart kid stock photo</Img>
      </ImgDiv>
      <PfTop>
        <LeftPf>
          <p>Azizbek</p>
          <p>typosbro</p>
          <p>coolcoder@gmail.com</p>
        </LeftPf>
      </PfTop>
    </Container>
  );
};

export default Profile;
