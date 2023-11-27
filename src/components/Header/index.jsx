import { Container, Item, Icon, Span, Course, Bar, List } from "./styled";
import { bio, streak, diamond, heart } from "assets/icons/";

const Header = () => {
  return (
    <Container>
      <List>
        <Item>
          <Course src={bio} alt="bio" />
        </Item>
        <Item>
          <Icon src={streak} alt="streak" />
          <Span>12</Span>
        </Item>
        <Item>
          <Icon src={diamond} alt="diamond" />
          <Span>618</Span>
        </Item>
        <Item>
          <Icon src={heart} alt="heart" />
          <Span>5</Span>
        </Item>
      </List>
      <Bar />
    </Container>
  );
};

export default Header;
