import { styled } from 'linaria/react';

export const StyledSection = styled.section`
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  > * {
    width: 100%;
    z-index: 2;
  }
`;

export const StyledSectionHeader = styled.div``;

export const StyledSectionBody = styled.div`
  flex: 1;
`;
export const StyledSectionFooter = styled.div``;

export const StyledSectionBackground = styled.div`
  position: absolute;
  z-index: 0;
`;
