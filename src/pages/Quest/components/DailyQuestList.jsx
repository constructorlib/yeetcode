import { Container, Title, Subtitle, List, Meta, Icon } from "../styles/DailyQuestList";
import { DailyQuest } from "./";

const DailyQuestList = () => {
  return (
    <Container>
      <Meta>
        <Title>Daily Quests</Title>
        <Subtitle>
          <Icon /> 9 hours
        </Subtitle>
      </Meta>
      <List>
        <DailyQuest />
        <DailyQuest />
        <DailyQuest />
      </List>
    </Container>
  );
};

export default DailyQuestList;
