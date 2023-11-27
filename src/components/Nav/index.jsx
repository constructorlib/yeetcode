import { Container, Item, Icon } from "./styled";
import { bio, streak, diamond, heart } from "assets/icons";

const NavBar = () => {
  return (
    <Container>
      <Item>
        <Icon src={bio} alt="home" />
      </Item>
      <Item>
        <Icon src={streak} alt="challenge" />
      </Item>
      <Item>
        <Icon src={diamond} alt="rank" />
      </Item>
      <Item>
        <Icon src={heart} alt="account" />
      </Item>

      <Item>
        <Icon src={heart} alt="rewards" />
      </Item>

      <Item>
        <Icon src={heart} alt="notifications" />
      </Item>
    </Container>
  );
};

export default NavBar;
