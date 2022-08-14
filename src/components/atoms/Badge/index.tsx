import styled from "styled-components";

// バッジの円形
const BadgeWrapper = styled.div<{ backgroundColor: string }>`
  border-radius: 20px;
  height: 20px;
  min-width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const BadgeText = styled.p`
  color: white;
  font-size: 11px;
  user-select: none;
`;

type BadgeProps = {
  content: string;
  backgroundColor: string;
};

const Badge = (props: BadgeProps) => {
  return (
    <BadgeWrapper backgroundColor={props.backgroundColor}>
      <BadgeText>{props.content}</BadgeText>
    </BadgeWrapper>
  );
};

export default Badge;
