import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const NoResult = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    background-color: ${theme.colors.white};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 12px;

    & > h3 {
      ${theme.fonts.medium15};
      color: ${theme.colors.gray60};
    }
  `}
`;
