import { styled } from 'linaria/react';
import { media } from '@styles/breakpoints';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLogoName = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  font-family: 'Bebas Neue';
  text-transform: uppercase;
  line-height: 19px;

  margin-left: 0.5rem;

  ${media.down('lg')} {
    display: none;
  }
`;
