import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const NavItem = styled.li`
  ${({ theme }) => css`
    & > a > span {
      ${theme.fonts.medium16};
      display: flex;
      align-items: center;
      height: 100%;
      padding: 10px 20px;
      color: ${theme.colors.gray50};
      transition: 0.3s;

      &[aria-current='page'] {
        ${theme.fonts.semibold16};
        color: ${theme.colors.black};
      }

      @media (hover: hover) {
        &:not([aria-current='page']):hover {
          color: ${theme.colors.black};
        }
      }
    }
  `}
`;
