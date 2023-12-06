import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { start, stop, next, check } from "context/testSlice";

import {
  Container,
  ProgressBar,
  HeartIcon,
  DismissIcon,
  HeartIconContainer,
  DismissIconContainer,
} from "../styles/Progress";

import { heart } from "assets/icons/";

const Progress = ({ meta }) => {
  const { questionList, currentQuestion, wrongQuestionList } = useSelector((state) => state.test);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <DismissIconContainer onClick={() => navigate("/")}>
        <DismissIcon />
      </DismissIconContainer>

      <ProgressBar status={currentQuestion / (questionList.length + wrongQuestionList.length)} />
      <HeartIconContainer>
        <HeartIcon src={heart} /> {5 - wrongQuestionList.length}
      </HeartIconContainer>
    </Container>
  );
};

export default Progress;
