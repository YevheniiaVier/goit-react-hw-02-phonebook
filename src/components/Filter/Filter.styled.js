import styled from 'styled-components';

export const StyledFilter = styled.input`
  background-color: transparent;
  border: ${p => `2px solid ${p.theme.colors.accent}`};
  height: 30px;
  width: 200px;
  padding: 0 0px;
  font-size: 1.1em;
  font-weight: lighter;
  color: ${p => p.theme.colors.transparent};
  transition: all 300ms;
  transition-timing-function: ease-out;
  transform: scale(0.15, 1);
  transform-origin: left;
  border-radius: 50%;
  &:focus,  &: not(: placeholder-shown) {
    border-radius: 24px;
    transform: scale(1, 1);
    padding: 0 12px;
    outline: none;
    color: ${p => p.theme.colors.secondary};
  }
`;
export const FilterLabel = styled.label`
  position: relative;
  min-width: 200px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  ${StyledFilter}:focus ~ & {
    color: ${p => p.theme.colors.offline};
  }
  &:after {
    content: '';
    border-top: ${p => `3px solid ${p.theme.colors.accent}`};
    width: 15px;
    display: block;
    position: absolute;
    right: -47px;
    bottom: -3px;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    ${StyledFilter}:focus ~ & {
      content: '';
      border-top: ${p => `3px solid ${p.theme.colors.accent}`};

      display: block;
      position: absolute;
      right: -87%;
      bottom: 50%;
      -ms-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    ${StyledFilter}:not(:placeholder-shown) ~ & {
      content: '';
      border-top: ${p => `3px solid ${p.theme.colors.accent}`};

      display: block;
      position: absolute;
      right: -87%;
      bottom: 50%;
      -ms-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
  &:before {
    content: '';
    border-top: ${p => `3px solid ${p.theme.colors.accent}`};
    width: 0px;
    display: block;
    position: absolute;
    right: -2px;
    bottom: 19px;
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    -webkit-transition-delay: 0s; /* Safari */
    transition-delay: 0s;
    ${StyledFilter}:focus ~ & {
      right: -87%;
      bottom: 50%;
      width: 15px;
      -webkit-transition: all 0.1s;
      transition: all 0.1s;
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
      -webkit-transition-delay: 0.2s; /* Safari */
      transition-delay: 0.2s;
    }
    ${StyledFilter}:not(:placeholder-shown) ~ & {
      right: -87%;
      bottom: 50%;
      width: 15px;
      -webkit-transition: all 0.1s;
      transition: all 0.1s;
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
      -webkit-transition-delay: 0.2s; /* Safari */
      transition-delay: 0.2s;
    }
  }

  //   color: ${p => p.theme.colors.secondary};
`;

export const FilterBox = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row-reverse;
  justify-content: left;
`;

export const Box = styled.div`
position relative;
      & button {
      position: absolute;
      width: 30px;
      height: 30px;
      padding: 0;
      left: 80%;
      // background-color: ${p => p.theme.colors.transparent};
      // box-shadow: none;
      // color: ${p => p.theme.colors.transparent};
      // background-image: none;
    }
`;
