import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ArrowIcon, ArrowDoubleIcon } from '@/assets/icons';

export const Root = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 72px;
    border: 1px solid ${theme.colors.gray20};
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
`;

export const ArrowBtn = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 2px;

    svg {
      fill: ${theme.colors.gray50};
    }

    :hover:not([disabled]) {
      background-color: ${theme.colors.gray30};

      svg {
        fill: ${theme.colors.gray60};
      }
    }

    &[disabled] {
      opacity: 0.5;
    }
  `}
`;

export const ArrowLeftIcon = styled(ArrowIcon)`
  transform: rotate(90deg);
`;

export const ArrowRightIcon = styled(ArrowIcon)`
  transform: rotate(-90deg);
`;

export const ArrowDoubleLeftIcon = styled(ArrowDoubleIcon)``;

export const ArrowDoubleRightIcon = styled(ArrowDoubleIcon)`
  transform: rotate(-180deg);
`;

export const NumWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > :last-child {
    border-right: 0;
  }
`;

interface NumBtnProps {
  isSizeLg?: boolean;
  isCurrentPage: boolean;
}

export const NumBtn = styled.button<NumBtnProps>`
  ${({ theme, isSizeLg, isCurrentPage }) => css`
    ${theme.fonts.regular14};

    display: flex;
    justify-content: center;
    align-items: center;
    width: ${isSizeLg ? '40px' : '32px'};
    height: 32px;
    border-radius: 2px;
    color: ${isCurrentPage ? theme.colors.black : theme.colors.gray50};
    background-color: ${isCurrentPage ? theme.colors.gray10 : theme.colors.white};

    :disabled {
      :hover {
        background-color: ${theme.colors.gray10};
      }
    }

    :hover {
      background-color: ${theme.colors.gray30};
    }
  `}
`;
