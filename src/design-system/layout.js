import { styled } from 'linaria/react';

export const StyledLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  min-height: 100%;

  color: var(--color-primary);
  background-color: var(--color-bg);

  transition: color 0.3s ease, background-color 0.3s ease;
`;
