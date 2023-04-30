import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const List = styled.ul`
  ${({ theme }) => css`
    width: 100%;
    min-height: 378px; // For No Layout SHift
    padding: 40px 20px 48px;
    background-color: ${theme.colors.white};

    @media ${theme.breakPoint.device.tablet} {
      padding: 80px 20px 40px;
    }

    @media ${theme.breakPoint.device.desktop} {
      padding: 0 20px;
    }
  `}
`;

export const Item = styled.li`
  & > a {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
`;
