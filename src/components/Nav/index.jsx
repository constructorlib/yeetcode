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
      <Item active={checkLocation("reward")} to="/rewards">
        <Icon src={gift} alt="rewards" />
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
      <Item active={checkLocation("notifications")} to="/notifications">
        <Icon src={notification} alt="notifications" />
      </Item>
    </Container>
  );
};

export default NavBar;
