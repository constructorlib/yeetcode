import { useDispatch, useSelector } from "react-redux";

import { start, stop, next, check } from "context/testSlice";

import { celebrate, lightning } from "assets/icons/";
import {
  Container,
  Main,
  Header,
  Title,
  Description,
  Image,
  StatsList,
  StatsItem,
  StatsTitle,
  StatsValue,
  StatsIcon,
  TimeIcon,
  CheckIcon,
  Button,
} from "../styles/CheckModal";
import { useNavigate } from "react-router";

const CheckModal = () => {
  const stats = [
    {
      color: "#feca00",
      title: "Total XP",
      value: 23,
      icon: <StatsIcon src={lightning} />,
    },
    {
      color: "#49c0f8",
      title: "Quick",
      value: "03:08",
      icon: <TimeIcon />,
    },
    {
      color: "#91d436",
      title: "Good",
      value: "84%",
      icon: <CheckIcon />,
    },
  ];

  const { questionList, currentQuestion, wrongQuestionList, score } = useSelector(
    (state) => state.test
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleContinue = () => {
    dispatch(stop());
    navigate("/");
  };

  return (
    <Container>
      <Main>
        <Image src={celebrate} />
        <Header>
          <Title>Good job</Title>
          <Description>You scored higher than 97% of students!</Description>
        </Header>
        <StatsList>
          <StatsItem color="#feca00">
            <StatsTitle>Total XP</StatsTitle>
            <StatsValue color="#feca00">
              <StatsIcon src={lightning} />
              {Math.round((score / questionList.length) * 10) * 10}
            </StatsValue>
          </StatsItem>
          <StatsItem color="#49c0f8">
            <StatsTitle>Quick</StatsTitle>
            <StatsValue color="#49c0f8">
              <TimeIcon />
              03:08
            </StatsValue>
          </StatsItem>
          <StatsItem color="#91d436">
            <StatsTitle>Good</StatsTitle>
            <StatsValue color="#91d436">
              <CheckIcon />
              {(score / questionList.length) * 100}%
            </StatsValue>
          </StatsItem>
        </StatsList>
      </Main>
      <Button onClick={handleContinue}>Continue</Button>
    </Container>
  );
};

export default CheckModal;
