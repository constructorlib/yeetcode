import { Badge, DailyQuestList, FriendQuest, Hero } from "./components";

import { Container } from "./styles/";

const Quest = () => {
  return (
    <Container>
      <Hero />
      <DailyQuestList />
      <FriendQuest />

      {/* <div>
        <Badge></Badge>
      </div> */}
    </Container>
  );
};

export default Quest;
