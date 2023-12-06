import { useDispatch, useSelector } from "react-redux";

import { start, stop, next, check } from "context/testSlice";

import { Container, Option, List, Submit, Feedback, FeedbackWrapper } from "../styles/OptionList";
import { useState } from "react";

const OptionList = ({ current }) => {
  const { questionList, currentQuestion, wrongQuestionList, isCorrect } = useSelector(
    (state) => state.test
  );
  const dispatch = useDispatch();

  const options = questionList[currentQuestion].options;
  const [selected, setSelected] = useState(null);

  const getStatus = () => {
    if (isCorrect === null && selected === null) return "init";
    if (selected !== null && isCorrect === null) return "selected";
    if (isCorrect === true) return "correct";
    if (isCorrect === false) return "error";
    // return null;
  };

  const submit = () => {
    if (isCorrect === null) return dispatch(check(selected));
    setSelected(null);
    return dispatch(next());
  };

  return (
    <Container>
      <List>
        {options.map((option, index) => (
          <Option
            onClick={() => setSelected(option)}
            selected={selected}
            value={option}
            key={index}
          >
            {option}
          </Option>
        ))}
      </List>
      <FeedbackWrapper>
        <Feedback status={String(isCorrect)}>Correct</Feedback>
        <Submit status={getStatus()} onClick={submit}>
          {isCorrect === null ? "Check" : "Next"}
        </Submit>
      </FeedbackWrapper>
    </Container>
  );
};

export default OptionList;
