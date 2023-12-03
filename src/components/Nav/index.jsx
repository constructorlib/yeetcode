import { useLocation } from "react-router";

import { Container, Item, Icon } from "./styled";
import { challenge, console, profile, notification, gift } from "assets/icons";

const NavBar = () => {
  const location = useLocation();
  const checkLocation = (path) => {
    return location.pathname === `/${path}` ? "active" : "inactive";
  };

  return (
    <Container>
      <Item active={checkLocation("quest")} to="/quest">
        <Icon src={gift} alt="quest" />
      </Item>
      <Item active={checkLocation("rank")} to="/rank">
        <Icon src={challenge} alt="challenge" />
      </Item>
      <Item active={checkLocation("")} to="/">
        <Icon src={console} alt="console" />
      </Item>
      <Item active={checkLocation("profile")} to="/profile">
        <Icon src={profile} alt="profile" />
      </Item>
      <Item active={checkLocation("notification")} to="/notification">
        <Icon src={notification} alt="notification" />
      </Item>
    </Container>
  );
};

export default NavBar;
