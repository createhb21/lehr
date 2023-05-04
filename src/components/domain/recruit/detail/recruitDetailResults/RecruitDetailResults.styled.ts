import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const RecruitDetailResults = styled.article`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
  `}
`;
