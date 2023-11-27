import { Container, Icon, Main } from "../styles/League";
import { bronze, silver, gold, yellowDiamond, redDiamond } from "assets/icons/";

const League = () => {
  return (
    <Container>
      <Icon src={bronze} />
      <Icon src={silver} />
      <Main src={gold} />
      <Icon src={yellowDiamond} />
      <Icon src={redDiamond} />
    </Container>
  );
};

export default League;
