import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Header = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: ${theme.colors.white};
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.size.container};
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    @media ${theme.breakPoint.device.tablet} {
      margin: 0 auto;
    }
  `}
`;
