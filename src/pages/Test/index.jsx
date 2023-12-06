import { useState } from "react";
import { OptionList, Progress, Question } from "./components";

import { Container } from "./styles/";

export const Test = () => {
  return (
    <Container>
      <Progress />
      <Question />
      <OptionList />
    </Container>
  );
};

export default Test;
