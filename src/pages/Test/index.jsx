import { useDispatch, useSelector } from "react-redux";

import { start, stop, next, check } from "context/testSlice";
import { CheckModal, OptionList, Progress, Question } from "./components";

import { Container } from "./styles/";

export const Test = () => {
  const { end } = useSelector((state) => state.test);
  return (
    <Container>
      {!end ? (
        <CheckModal />
      ) : (
        <>
          <Progress />
          <Question />
          <OptionList />
        </>
      )}
    </Container>
  );
};

export default Test;
