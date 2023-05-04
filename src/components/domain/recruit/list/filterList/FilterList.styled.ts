import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FilterListContainer = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.gray20};
    padding: 0 20px;

    @media ${theme.breakPoint.device.tablet} {
      padding: 0;
    }
  `}
`;

export const FilterList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(150px, max-content));
  column-gap: 8px;
  min-width: 100%;
  width: max-content;
  margin-bottom: 12px;
`;
