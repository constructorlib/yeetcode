import { Container, Item, Icon } from "./styled";
import {
  challenge,
  console,
  congrats,
  congrats2,
  discuss,
  medal,
  money,
  profile,
  notification,
  rank,
  suitcase,
} from "assets/icons";

const NavBar = () => {
  return (
    <Container>
      <Item>
        <Icon src={suitcase} alt="rewards" />
      </Item>
      <Item>
        <Icon src={rank} alt="rank" />
      </Item>
      <Item active>
        <Icon src={console} alt="console" />
      </Item>
      <Item>
        <Icon src={profile} alt="profile" />
      </Item>
      <Item>
        <Icon src={notification} alt="notifications" />
      </Item>
    </Container>
  );
};

export default NavBar;
