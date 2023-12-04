import { Container, Item, Title, Subtitle, UpIcon, DownIcon, TimeIcon } from "../styles/Meta";

const Meta = () => {
  return (
    <Container>
      <Item>
        <Subtitle>Today</Subtitle>
        <Title>
          <UpIcon /> 2 places
        </Title>
      </Item>
      <Item>
        <Subtitle>Time Left</Subtitle>
        <Title>
          <TimeIcon /> 6 days
        </Title>
      </Item>
    </Container>
  );
};

export default Meta;
