import { useNavigate } from "react-router";
import { Container, Card, List, Title, Subtitle, Progress, Button } from "./styled";

const cards = [
  {
    title: "Section 1: Rookie",
    done: 5,
    total: 8,
  },
  {
    title: "Section 2: Explorer",
    done: 0,
    total: 20,
  },
  {
    title: "Section 3: Traveler",
    done: 0,
    total: 28,
  },
  {
    title: "Section 4: Champion",
    done: 0,
    total: 8,
  },
  {
    title: "Section 5: Refresh",
    done: 0,
    total: 6,
  },
];

const Menu = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <List>
        {cards.map((c) => (
          <Card>
            <Title>{c.title}</Title>
            <Subtitle>
              {c.done}/{c.total} UNITS
            </Subtitle>
            <Progress />
            <Button onClick={() => navigate("/detail")} bg="light">
              SEE DETAILS
            </Button>
            <Button onClick={() => navigate("/test")} bg="dark">
              CONTINUE
            </Button>
          </Card>
        ))}
      </List>
    </Container>
  );
};

export default Menu;
