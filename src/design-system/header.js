import { css } from 'linaria';
import { styled } from 'linaria/react';

export const styleHeader = css`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: var(--color-bg);

  height: 50px;
  width: 100vw;

  padding-top: 10px;
  padding-bottom: 10px;

  z-index: 100;

  transition: top 0.3s ease, background-color 0.3s ease;
`;

export const StyledHeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
