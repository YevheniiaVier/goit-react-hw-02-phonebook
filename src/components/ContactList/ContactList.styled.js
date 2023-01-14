import styled from 'styled-components';

export const StyledContacts = styled.ul`
  width: 600px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  margin: ${p => p.theme.space[0]}px;
  list-style: none;
  padding: ${p => p.theme.space[0]}px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;
`;
export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${p => p.theme.colors.primary};
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.big};
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  & button {
    width: 80px;
    height: 40px;
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
    color: ${p => p.theme.colors.text};
  }
`;

export const ContactImg = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 50px;
  height: auto;
  margin-right: ${p => p.theme.space[3]}px;
  border: ${p => `2px solid ${p.theme.colors.accent}`};
  border-radius: ${p => p.theme.radii.big};
  background-color: ${p => p.theme.colors.accentDark}; ;
`;

export const StyledSvg = styled.svg.attrs(props => ({
  width: props.width,
  height: props.height,
  viewBox: props.viewBox,
}))`
  fill: ${p => p.theme.colors.accentDark};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${p => p.theme.space[3]}px;
`;
