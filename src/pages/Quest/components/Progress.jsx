import { palestine } from "assets/icons/";
import { Container, ProgressBar, Title, Icon, Active } from "../styles/Progress.js";

const Progress = () => {
  return (
    <Container>
      <Title>Complete 30 quests!</Title>
      <ProgressBar status={10 / 30}>
        10 / 30
        <Icon src={palestine} />
      </ProgressBar>
    </Container>
  );
};

export default Progress;
