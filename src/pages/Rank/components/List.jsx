import { Container, Wrapper, Button, Icon, Text } from "../styles/List";
import { lightning } from "assets/icons/";
import Item from "./Item";
import { useSelector } from "react-redux";

const List = () => {
  const { list, current, account } = useSelector((state) => state.profile);

  return (
    <Container>
      {list.map((item) => (
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
