import { heart } from "assets/icons/";
import {
  Container,
  ProgressBar,
  HeartIcon,
  DismissIcon,
  HeartIconContainer,
  DismissIconContainer,
} from "../styles/Progress.js";

const Progress = () => {
  return (
    <Container>
      <DismissIconContainer>
        <DismissIcon />
      </DismissIconContainer>
      <ProgressBar status={12 / 30} />
      <HeartIconContainer>
        <HeartIcon src={heart} />2
      </HeartIconContainer>
    </Container>
  );
};

export default Progress;
