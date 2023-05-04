import Link from 'next/link';
import NextImage from 'next/image';

import { getCurrentDateTime } from '@/utils/getCurrentDateTime';

import { DEFAULT_THUMBNAIL_IMAGE } from '@/constants';

import { ViewIcon } from '@/assets/icons';

import { Button } from '@/components/common';

import { RecruitDetail } from '@/types';

import * as S from './RecruitDetailResults.styled';

interface RecruitDetailResultsProps {
  data?: RecruitDetail;
}

const RecruitDetailResults = ({ data }: RecruitDetailResultsProps) => {
  const secondDepthPositions = data?.position_arr?.reduce((acc, cur) => {
    return [...acc, cur?.task?.sub_task_arr?.join(',')];
  }, [] as string[]);

  return (
    <S.RecruitDetailResults>
      <S.ListItem>
        <S.CTAWrapper>
          <S.Image>
            <NextImage src={data?.company?.logo_url || DEFAULT_THUMBNAIL_IMAGE} alt="" fill />
          </S.Image>
          <S.DescList>
            <S.TimeDesc>
              {getCurrentDateTime(data?.start_time)}~{getCurrentDateTime(data?.end_time)}
            </S.TimeDesc>
            <S.CompanyName>{data?.company?.name}</S.CompanyName>
            <S.Title>{data?.title}</S.Title>
            <S.IconDesc>
              <ViewIcon />
              {data?.view}
            </S.IconDesc>
            <Link href={data?.apply_url || '/jd/list'} target="_blank" rel="noopener noreferrer">
              <Button css={S.recruitButton} size="smd" label="지원하기" variant="secondary" />
            </Link>
          </S.DescList>
        </S.CTAWrapper>
      </S.ListItem>
      <S.OneDepthPositionList>
        {data?.position_arr?.map((item) => {
          return (
            <S.OneDepthPosition key={item?.id}>
              <Button size="xs" label={item?.task?.main_task} variant="primary" />
            </S.OneDepthPosition>
          );
        })}
      </S.OneDepthPositionList>
      <S.SecondDepthPositionList>
        {secondDepthPositions?.map((item, idx) => {
          return (
            <S.SecondDepthPosition key={idx}>
              <Button size="xs" label={item !== '' ? item : '없음'} variant="secondary" />
            </S.SecondDepthPosition>
          );
        })}
      </S.SecondDepthPositionList>
    </S.RecruitDetailResults>
  );
};

export default RecruitDetailResults;
