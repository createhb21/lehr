import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const RecruitDetailResults = styled.article`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
  `}
`;

export const ListItem = styled.li`
  ${({ theme }) => css`
    width: 100%;
    border: 1px solid ${theme.colors.gray20};
    border-radius: 20px;
    padding: 0 2px;
    margin-bottom: 20px;
    transition: 0.3s;
  `}
`;

export const CTAWrapper = styled.div`
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

export const TimeDesc = styled.span`
  margin-bottom: 20px;
`;

export const CompanyName = styled.strong``;

export const IconDesc = styled.span`
  position: absolute;
  top: 0;
  right: 4px;
  display: flex;
  align-items: center;
  column-gap: 4px;
  width: max-content;
`;

export const recruitButton = css`
  position: absolute;
  bottom: 0;
  right: 4px;
`;

export const OneDepthPositionList = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 12px;
  width: 100%;
  padding: 20px;
`;

export const OneDepthPosition = styled.li`
  width: max-content;
`;

export const SecondDepthPositionList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    column-gap: 12px;
    width: 100%;
    padding: 0 20px 20px 20px;
    margin-bottom: 40px;
    border-bottom: 1px solid ${theme.colors.gray20};
  `}
`;

export const SecondDepthPosition = styled.li`
  width: max-content;
`;
