import { StyledButton } from './Button.styled';

export const Button = ({ text, type }) => {
  return <StyledButton type={type}>{text}</StyledButton>;
};
