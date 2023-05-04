import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const List = styled.ul`
  ${({ theme }) => css`
    display: grid;
    padding: 0 20px;
    gap: 10px;

    @media ${theme.breakPoint.device.tablet} {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  `}
`;

export const ListItem = styled.li`
  ${({ theme }) => css`
    width: 100%;
    border: 1px solid ${theme.colors.gray20};
    border-radius: 20px;
    padding: 0 2px;
    transition: 0.3s;

    @media (hover: hover) {
      &:hover {
        border-color: ${theme.colors.gray40};
      }
    }
  `}
`;

export const AnchorWrapper = styled.div`
  display: flex;
  column-gap: 20px;
  padding: 20px 18px;
`;

export const Image = styled.div`
  position: relative;
  width: 80px;
  height: 80px;

  & > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const DescList = styled.dl`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 100%;
  max-width: 100%;
  margin-top: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 4px;
`;

export const TimeDesc = styled.span`
  margin-bottom: 20px;
`;

export const CompanyName = styled.strong``;

export const IconDesc = styled.span`
  display: flex;
  align-items: center;
  column-gap: 4px;
  width: max-content;
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    ${theme.fonts.semibold17};
    position: absolute;
    left: 0;
    bottom: 0;
    width: 120px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: ${theme.colors.black};

    @media ${theme.breakPoint.device.desktop} {
      width: max-content;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  `}
`;

export const Desc = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.regular15};
    position: relative;
    display: flex;
    color: ${theme.colors.gray70};
  `}
`;

export const FloatDesc = styled.span`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    align-items: center;
    column-gap: 8px;
    bottom: 6px;
    right: 4px;

    @media ${theme.breakPoint.device.desktop} {
      bottom: unset;
      top: 0;
    }
  `}
`;

export const ListItemSkeleton = styled.li`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    min-height: 112px;
    border-bottom: 1px solid ${theme.colors.gray20};
    padding: 16px 18px;
  `}
`;

export const ContentSkeleton = styled.div`
  position: relative;
  display: flex;
  column-gap: 20px;
  width: 100%;
`;

export const ImageSkeleton = styled.div`
  width: 80px;
  height: 80px;
`;

export const TagList = styled.ul`
  position: absolute;
  top: 0;
  right: 4px;
  display: flex;
  justify-self: flex-end;
  column-gap: 8px;
  margin-top: 12px;
`;

export const paddingOnSkeleton = css`
  padding: 40px 0;
`;
