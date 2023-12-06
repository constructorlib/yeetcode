import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "context/profileSlice";
import { Container, Wrapper, Avatar, Icon, Text, Span, Number } from "../styles/Item";
import { first, second, third } from "assets/icons/";
import { useNavigate } from "react-router";

const Item = ({ name, id, score }) => {
  const { account } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const src = `https://api.dicebear.com/7.x/personas/svg?seed=${name}&&backgroundColor=b6e3f4,c0aede,d1d4f9`;

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

  const handleClick = () => {
    dispatch(setCurrent({ id, name, score }));
    navigate("/profile");
  };

  return (
    <Container onClick={handleClick} status={account.id === id && "active"}>
      <Wrapper>{getAvatar()}</Wrapper>
      <Avatar src={src} />
      <Text>{name}</Text>
      <Span>{score} XP</Span>
    </Container>
  );
};

export default Item;
