import { useSelector, useDispatch } from "react-redux";
import {
  uzbekistan,
  japan,
  avatar2,
  cogwheel,
  addfriend,
  bolt,
  fire,
  gold,
  trophy,
  bell,
  upload,
} from "assets/icons";

import { List, Card, Container, Image, Icon, Settings, CardTitle, CardSubtitle } from "./styles/";

const Profile = () => {
  const { account, current } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const profile = current ?? account;

  const src = `https://api.dicebear.com/7.x/personas/svg?seed=${profile?.name}&&backgroundColor=b6e3f4`;

  return (
    <Container>
      <Settings src={cogwheel} alt="cogwheel" />
      <Image src={src} />

      <List>
        <Card>
          <CardTitle>
            <Icon src={fire} alt="fire" />
            {profile.streak}
          </CardTitle>
          <CardSubtitle>Day streak</CardSubtitle>
        </Card>

        <Card>
          <CardTitle>
            <Icon src={bolt} alt="bolt" />
            {profile.total}
          </CardTitle>
          <CardSubtitle>Total XP</CardSubtitle>
        </Card>
        <Card>
          <CardTitle>
            <Icon src={gold} alt="goldmedal" />
            Gold
          </CardTitle>
          <CardSubtitle>Current league</CardSubtitle>
        </Card>
        <Card>
          <CardTitle>
            <Icon src={trophy} alt="trophy" />
            {profile.top}
          </CardTitle>
          <CardSubtitle>Top 3 finishes</CardSubtitle>
        </Card>
      </List>
    </Container>
  );
};

export default Profile;
