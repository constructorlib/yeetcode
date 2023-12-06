import { Card } from "./components";
import { Container, Title, List } from "./styles/";

const Notification = () => {
  return (
    <Container>
      <Title>Feed</Title>

      <List>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </List>
    </Container>
  );
};

export default Notification;
