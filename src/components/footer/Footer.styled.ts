import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    height: ${theme.size.footer.height_m};
    padding: 28px 0;
    background-color: ${theme.colors.white};
  `}
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
