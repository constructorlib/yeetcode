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

import { celebrate, congrats, congrats2 } from "assets/icons/";

const Card = ({ name }) => {
  const [select, setSelect] = useState(false);

  const src = `https://api.dicebear.com/7.x/personas/svg?seed=${
    name ?? "typosbro_"
  }&&backgroundColor=b6e3f4,c0aede,d1d4f9`;

  return (
    <Container>
      <Header>
        <Main>
          <Avatar src={src} />
          <Title>Kumar</Title>
          <Subtitle>13 hours</Subtitle>
          <Message>Earned a total of 2000 XP</Message>
        </Main>
        <Image src={congrats} />
      </Header>
      <Button status={String(select)} onClick={() => setSelect((prev) => !prev)}>
        {select ? "Celebrated" : "Celebrate"}
      </Button>
      <Comment>
        <Pfp src={src} />
        <Input placeholder="Add a comment..." />
      </Comment>
    </Container>
  );
};

export default Card;
