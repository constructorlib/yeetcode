import { chest, lightning } from "assets/icons/";
import { Container, ProgressBar, Title, Icon, Active, Image } from "../styles/DailyQuest";

const DailyQuest = ({ quest }) => {
  return (
    <Container>
      <Image src={quest?.icon ?? lightning} />
      <Title>{quest?.title ?? "Earn 50 XP"}</Title>
      <ProgressBar status={quest?.progress / quest?.total}>
        <Active>
          {quest?.progress} / {quest?.total}
        </Active>
        <Icon src={chest} />
      </ProgressBar>
    </Container>
  );
};

export default DailyQuest;
