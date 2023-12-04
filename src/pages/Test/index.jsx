import { CheckModal, OptionList, Progress, Question } from "./components";

import { Container } from "./styles/";

export const Test = () => {
  return (
    <Container>
      <Progress />
      <Question />
      <OptionList />
      <CheckModal />
    </Container>
  );
};

export default Test;
