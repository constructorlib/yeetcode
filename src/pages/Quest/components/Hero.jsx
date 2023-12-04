import { gaza } from "assets/icons/";
import {
  Container,
  Title,
  Subtitle,
  Span,
  MetaWrapper,
  Meta,
  Image,
  TimeIcon,
} from "../styles/Hero";
import { Progress } from "./";

const Hero = () => {
  return (
    <Container>
      <MetaWrapper>
        <Meta>
          <Subtitle>December</Subtitle>
          <Title>Stop Genocide</Title>
          <Title>Stop Bombing Gaza</Title>

          <Span>
            <TimeIcon /> 20 days
          </Span>
        </Meta>
        <Image src={gaza} />
      </MetaWrapper>
      <Progress />
    </Container>
  );
};

export default Hero;
