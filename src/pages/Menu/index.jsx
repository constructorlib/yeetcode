import { useNavigate } from "react-router";
import { Container, Card, List, Title, Subtitle, Progress, Button } from "./styled";

const cards = [
  {
    title: "Section 1: Arithmetic",
    done: 5,
    total: 8,
  },
  {
    title: "Section 2: Algebra",
    done: 0,
    total: 20,
  },
  {
    title: "Section 3: Trigonometry",
    done: 0,
    total: 28,
  },
  {
    title: "Section 4: Geometry",
    done: 0,
    total: 8,
  },
  {
    title: "Section 5: Calculus 1",
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
          <Card key={c.title}>
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
