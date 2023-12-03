import { Badge, DailyQuest, FriendQuest, Hero } from "./components";

import { Container } from "./styles/";

const Quest = () => {
  return (
    <Container>
      <Hero></Hero>
      <DailyQuest></DailyQuest>
      <FriendQuest></FriendQuest>

      {/* <div>
        <Badge></Badge>
      </div> */}
    </Container>
  );
};

export default Quest;
