import { useState } from "react";
import {
  Container,
  Title,
  Subtitle,
  Main,
  Button,
  Avatar,
  Pfp,
  Comment,
  Message,
  Input,
  Header,
  Image,
} from "../styles/Card";
import { useSelector } from "react-redux";

const Card = ({ name, time, message, img }) => {
  const [select, setSelect] = useState(false);

  const { account } = useSelector((state) => state.profile);

  const getAvatar = (name, bg) =>
    `https://api.dicebear.com/7.x/personas/svg?seed=${name ?? "typosbro_"}&&backgroundColor=${
      bg ?? "F8BBD0,b6e3f4,E91E63,c0aede,d1d4f9"
    }`;

  return (
    <Container>
      <Header>
        <Main>
          <Avatar src={getAvatar(name)} />
          <Title>{name}</Title>
          <Subtitle>{time}</Subtitle>
          <Message>{message}</Message>
        </Main>
        <Image src={img} />
      </Header>
      <Button status={String(select)} onClick={() => setSelect((prev) => !prev)}>
        {select ? "Celebrated" : "Celebrate"}
      </Button>
      <Comment>
        <Pfp src={getAvatar(account.name, "d1d4f9")} />
        <Input placeholder="Add a comment..." />
      </Comment>
    </Container>
  );
};

export default Card;
