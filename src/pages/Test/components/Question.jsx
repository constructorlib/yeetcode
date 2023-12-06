import { useDispatch, useSelector } from "react-redux";

import { start, stop, next, check } from "context/testSlice";

import { Container, Title, Text, Image, Wrapper } from "../styles/Question";
import { boy1, boy3, boy4, boy5, girl2 } from "assets/icons/";

const Question = () => {
  const { questionList, currentQuestion, wrongQuestionList } = useSelector((state) => state.test);
  const dispatch = useDispatch();

  const { question } = questionList[currentQuestion];

  return (
    <Container>
      <Title>Choose the correct option</Title>
      <Wrapper>
        <Image src={girl2} alt="boy1" />
        <Text>{question}</Text>
      </Wrapper>
    </Container>
  );
};

export default Question;
