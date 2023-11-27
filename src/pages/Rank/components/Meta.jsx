import { Container, Item, Title, Subtitle } from "../styles/Meta";

const Meta = () => {
  return (
    <Container>
      <Item>
        <Subtitle>Today</Subtitle>
        <Title>2 places</Title>
      </Item>
      <Item>
        <Subtitle>Time Left</Subtitle>
        <Title>6 days</Title>
      </Item>
    </Container>
  );
};

export default Meta;
