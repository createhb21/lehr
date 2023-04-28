import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const RecruitDetailResults = styled.article`
  ${({ theme }) => css`
    width: 100%;
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
