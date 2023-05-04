import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const RecruitDetailContainer = styled.div`
  ${({ theme }) => css`
    ${theme.size.container};
    min-height: inherit;
    margin: 0 auto;
    padding: 40px 20px;
  `}
`;
