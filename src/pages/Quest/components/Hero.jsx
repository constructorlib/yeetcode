import { gaza } from "assets/icons/";
import { Container, Title, Subtitle, Span, MetaWrapper, Meta, Image } from "../styles/Hero";
import { ProgressBar } from "./";

const Hero = () => {
  return (
    <Container>
      <MetaWrapper>
        <Meta>
          <Subtitle>December</Subtitle>
          <Title>Free Palestine March</Title>
          <Span> 20 days</Span>
        </Meta>
        <Image src={gaza} />
      </MetaWrapper>
      <ProgressBar />
    </Container>
  );
};

export default Hero;
