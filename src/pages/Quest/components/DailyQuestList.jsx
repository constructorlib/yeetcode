import { Container, Title, Subtitle, List, Meta, Icon } from "../styles/DailyQuestList";
import { DailyQuest } from "./";
import { lightning, palestine, challenge } from "assets/icons/";

const DailyQuestList = () => {
  const quests = [
    {
      title: "Earn 50 XP",
      icon: lightning,
      progress: 30,
      total: 50,
    },
    {
      title: "Learn history of Palestine",
      icon: palestine,
      progress: 1,
      total: 1,
    },
    {
      title: "Get 10 perfect lessons",
      icon: challenge,
      progress: 3,
      total: 10,
    },
  ];

  return (
    <Container>
      <Meta>
        <Title>Daily Quests</Title>
        <Subtitle>
          <Icon /> 9 hours
        </Subtitle>
      </Meta>
      <List>
        {quests.map((quest, index) => (
          <DailyQuest key={index} quest={quest} />
        ))}
      </List>
    </Container>
  );
};

export default DailyQuestList;
