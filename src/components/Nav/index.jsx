import { Container, Item, Icon } from "./styled";
import { challenge, challenge2, rank, profile, notification } from "assets/icons";

const NavBar = () => {
  return (
    <Container>
      <Item>
        <Icon src={challenge} alt="home" />
      </Item>
      <Item>
        <Icon src={challenge2} alt="challenge" />
      </Item>
      <Item>
        <Icon src={rank} alt="rank" />
      </Item>
      <Item>
        <Icon src={profile} alt="profile" />
      </Item>

      <Item>
        <Icon src={challenge} alt="rewards" />
      </Item>

      <Item>
        <Icon src={notification} alt="notifications" />
      </Item>
    </Container>
  );
};

export default NavBar;
