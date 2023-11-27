import { Container, Card, List, Title, Subtitle, Progress, Button } from "./styled";

const Menu = () => {
  return (
    <Container>
      <List>
        <Card>
          <Title>Section 1: Rookie</Title>
          <Subtitle>5/8 UNITS</Subtitle>
          <Progress />
          <Button>SEE DETAILS</Button>
          <Button>CONTINUE</Button>
        </Card>

        <Card>
          <Title>Section 1: Rookie</Title>
          <Subtitle>5/8 UNITS</Subtitle>
          <Progress />
          <Button>SEE DETAILS</Button>
          <Button>CONTINUE</Button>
        </Card>

        <Card>
          <Title>Section 1: Rookie</Title>
          <Subtitle>5/8 UNITS</Subtitle>
          <Progress />
          <Button>SEE DETAILS</Button>
          <Button>CONTINUE</Button>
        </Card>
      </List>
    </Container>
  );
};

export default Menu;
