import { Container, Wrapper, Button, Icon, Text } from "../styles/List";
import { lightning } from "assets/icons/";
import Item from "./Item";

const data = [
  { id: 0, name: "Kairyly", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 1, name: "Abbas", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 2, name: "Kairyly", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 3, name: "Prof.", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 4, name: "Abbas", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 5, name: "Kairyly", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 6, name: "Prof.", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 7, name: "Abbas", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 8, name: "Kairyly", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 9, name: "Prof.", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 10, name: "Abbas", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 11, name: "Kairyly", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 12, name: "Prof.", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 13, name: "Abbas", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 14, name: "Kairyly", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 15, name: "Prof.", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 16, name: "Abbas", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 17, name: "Kairyly", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 18, name: "Prof.", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 19, name: "Abbas", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 20, name: "Kairyly", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 21, name: "Prof.", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 22, name: "Abbas", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 23, name: "Kairyly", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 24, name: "Prof.", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 25, name: "Prof.", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 26, name: "Abbas", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 27, name: "Kairyly", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 28, name: "Prof.", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
  { id: 29, name: "Abbas", score: 100, avatar: "https://avatars.githubusercontent.com/u/1234" },
];

const List = () => {
  return (
    <Container>
      {data.map((item) => (
        <Item key={item.id} {...item} />
      ))}
      <Wrapper>
        <Button>
          <Icon src={lightning} />
          <Text>4 days</Text>
        </Button>
      </Wrapper>
    </Container>
  );
};

export default List;
