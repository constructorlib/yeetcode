import { useSelector, useDispatch } from "react-redux";
import { follow, unfollow } from "context/profileSlice";
import { cogwheel, lightning, fire, gold, trophy, bio, math, history } from "assets/icons";

import {
  List,
  Card,
  Container,
  Image,
  Icon,
  Settings,
  CardTitle,
  CardSubtitle,
  Meta,
  Title,
  Subtitle,
  Span,
  Button,
  UploadIcon,
  AddIcon,
  CourseList,
  CourseIcon,
  RemoveIcon,
} from "./styles/";

const Profile = () => {
  const { account, current } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const profile = current ?? account;
  console.log(current);
  console.log(account);

  const src = `https://api.dicebear.com/7.x/personas/svg?seed=${profile?.name}&&backgroundColor=b6e3f4`;

  const checkFollowing = () => account?.following?.includes(profile.id);

  const handleFollow = () => {
    if (current?.id === account?.id) return alert("You can't follow yourself");

    // check if current following account
    // if yes, then unfollow
    if (account?.following?.includes(profile.id)) dispatch(unfollow(profile));
    else {
      // else, follow
      dispatch(follow(profile));
    }
  };

  return (
    <Container>
      <Settings src={cogwheel} alt="cogwheel" />
      <Image src={src} />
      <Meta>
        <Title>{profile?.name}</Title>
        <Subtitle>{profile?.handle}</Subtitle>
        <Subtitle>Joined {profile?.joined}</Subtitle>
        <div style={{ display: "flex", gap: "2rem", margin: ".5rem 0" }}>
          <Span>{profile?.following?.length} Following</Span>
          <Span>{profile?.followers?.length} Followers</Span>
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          {checkFollowing() ? (
            <Button onClick={handleFollow}>
              <RemoveIcon />
              Unfollow
            </Button>
          ) : (
            <Button onClick={handleFollow}>
              <AddIcon />
              Follow
            </Button>
          )}
          <Button>
            <UploadIcon />
          </Button>
        </div>

        <CourseList>
          <CourseIcon src={history} />
          <CourseIcon src={math} />
          <CourseIcon src={bio} />
        </CourseList>
      </Meta>

      <List>
        <Title>Statistics</Title>

        <Card>
          <CardTitle>
            <Icon src={fire} alt="fire" />
            {profile.streak}
          </CardTitle>
          <CardSubtitle>Day streak</CardSubtitle>
        </Card>

        <Card>
          <CardTitle>
            <Icon src={lightning} alt="lightning" />
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
