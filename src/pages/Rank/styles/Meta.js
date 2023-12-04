import styled, { css } from "styled-components";
import { typography } from "styles/";
import { DownArrow, UpArrow } from "@styled-icons/boxicons-solid/";
import { Time } from "@styled-icons/boxicons-regular/";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
``;

const weight = "2px";
const radius = "1rem";
const color = "var(--dark-btn-inactive)";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  gap: 1rem;
  width: 50%;
  padding: 1rem 0;
  border: ${weight} solid ${color};

  &:first-child {
    border-top-left-radius: ${radius};
    border-bottom-left-radius: ${radius};
    border-right: calc(${weight} / 2) solid ${color};
    color: var(--dark-btn);
  }
  &:last-child {
    color: #e7b42f;
    border-top-right-radius: ${radius};
    border-bottom-right-radius: ${radius};
    border-left: calc(${weight} / 2) solid ${color};
  }
`;
export const Title = styled.div`
  ${typography.headingSm}
`;
export const Subtitle = styled.div`
  ${typography.captionMd_semibold}
  font-weight: 700;
  color: var(--dark-btn-text-inactive);
  text-transform: uppercase;
`;

const iconStyle = css`
  height: 2rem;
  width: 2rem;
`;
export const DownIcon = styled(DownArrow)`
  ${iconStyle}
`;
export const UpIcon = styled(UpArrow)`
  ${iconStyle}
`;
export const TimeIcon = styled(Time)`
  ${iconStyle}
`;
