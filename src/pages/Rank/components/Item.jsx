import { Container, Wrapper, Avatar, Icon, Text, Span, Number } from "../styles/Item";
import { first, second, third } from "assets/icons/";

const Item = ({ name, id, avatar, score }) => {
  const src = `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${name}&&scale=65`;

  const getAvatar = () => {
    switch (id) {
      case 0:
        return <Icon src={first} />;
      case 1:
        return <Icon src={second} />;
      case 2:
        return <Icon src={third} />;
      default:
        return <Number>{id + 1} </Number>;
    }
  };

  return (
    <Container status={id == 3 && "active"}>
      <Wrapper>{getAvatar()}</Wrapper>
      <Avatar src={src} />
      <Text>{name}</Text>
      <Span>{score} XP</Span>
    </Container>
  );
};

export default Item;
