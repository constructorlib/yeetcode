import { celebrate, palestine, diamond, streak } from "assets/icons";
import { Card } from "./components";
import { Container, Title, List } from "./styles/";

const data = [
  {
    name: "Tanaka",
    time: "13 hours",
    message: "Earned a total of 2000 XP",
    img: celebrate,
  },

  {
    name: "Alice",
    time: "14 hours",
    message: "Completed Free Palestine Course!",
    img: palestine,
  },

  {
    name: "lisa",
    time: "14 hours",
    message: "Was promoted to Diamond League!",
    img: diamond,
  },

  {
    name: "Kumar",
    time: "15 hours",
    message: "Achieved a 7 day streak!",
    img: streak,
  },
];

const Notification = () => {
  return (
    <Container>
      <Title>Feed</Title>

      <List>
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </List>
    </Container>
  );
};

export default Notification;
