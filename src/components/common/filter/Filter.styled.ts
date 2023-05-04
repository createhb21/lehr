import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ArrowIcon as IconArrow } from '@/assets/icons';

export const Filter = styled.div`
  position: relative;
  width: 100%;
`;

export const OpenerBtn = styled.button`
  ${({ theme }) => css`
    ${theme.fonts.regular15};
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 12px;
    width: 100%;
    height: 48px;
    border-radius: 10px;
    border: 1px solid ${theme.colors.gray20};
    padding: 0 12px 0 16px;
    color: ${theme.colors.gray80};
    background-color: ${theme.colors.white};
    transition: 0.3s;

    & > svg {
      fill: ${theme.colors.gray50};
    }

    &[aria-expanded='true'] > svg {
      transform: rotate(180deg);
    }

    @media (hover: hover) {
      &:not(:disabled):hover {
        box-shadow: 0 0 0 2px inset ${theme.colors.blue10};
      }
    }
  `}
`;

export const Placeholder = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray80};
  `}
`;

export const SelectedOption = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.blue40};
  `}
`;

export const ArrowIcon = styled(IconArrow)`
  ${({ theme }) => css`
    fill: ${theme.colors.gray50};
  `}
`;

interface FilterDropboxProps {
  isOpen: boolean;
}

export const FilterDropbox = styled.div<FilterDropboxProps>`
  ${({ theme, isOpen }) => css`
    position: absolute;
    top: calc(100% + 4px);
    display: ${isOpen ? 'unset' : 'none'};
    width: max-content;
    min-width: 100%;
    border-radius: 10px;
    padding: 10px 0;
    box-shadow: ${theme.boxShadows.filter};
    background-color: ${theme.colors.white};
    z-index: ${theme.zIndex.dialog};
    overflow: overlay;
  `}
`;

export const OptionList = styled.ul`
  width: 100%;
  height: 100%;
  overflow: overlay;
`;

export const FilterItems = styled.ul`
  ${({ theme }) => css`
    width: 100%;
    height: 330px;
    background-color: ${theme.colors.white};
    overflow: overlay;
  `}
`;

export const Option = styled.li`
  ${({ theme }) => css`
    width: 100%;
    height: 40px;
    padding: 2px;

    & > button {
      ${theme.fonts.regular15};
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 0 14px;
      color: ${theme.colors.gray80};
      background-color: ${theme.colors.white};
      transition: 0.3s;

      @media (hover: hover) {
        &:not(:disabled):hover {
          color: ${theme.colors.blue40};
        }
      }
    }

    &[aria-selected='true'] > button {
      color: ${theme.colors.blue40};
    }
  `}
`;

export const CheckOption = styled.li`
  ${({ theme }) => css`
    ${theme.fonts.regular15};
    width: 100%;

    & > div {
      width: 100%;
      height: 40px;
      padding: 2px;

      & > label {
        width: 100%;
        padding: 0 14px;
        transition: 0.3s;

        @media (hover: hover) {
          &:not(:disabled):hover {
            color: ${theme.colors.blue40};
          }
        }
      }
    }
  `}
`;
