import { Badge, DailyQuestList, FriendQuest, Hero } from "./components";

import { Container } from "./styles/";

const Quest = () => {
  return (
    <Container>
      <Hero />
      <DailyQuestList />
      {/* <FriendQuest /> */}
    </Container>
  );
};

export default Quest;
