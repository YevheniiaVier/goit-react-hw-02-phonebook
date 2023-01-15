import styled from 'styled-components';

export const NotificationText = styled.p`
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.accentDark};
  margin: 0 auto;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
`;

export const NotificationImg = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 300px;
  display: block;
  margin: 0 auto;
  margin-top: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.round};
`;
