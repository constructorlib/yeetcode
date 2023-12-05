import { Container, Toph1, MidWrapper, FeedCard } from "./styles.js";

const Notification = () => {
  return (
    <Container>
      <Toph1>
        <h1>News</h1>
      </Toph1>

      <MidWrapper>
        <FeedCard style={{ marginTop: "100px" }}>123</FeedCard>
        <FeedCard></FeedCard>
        <FeedCard></FeedCard>
      </MidWrapper>
    </Container>
  );
};

export default Notification;
