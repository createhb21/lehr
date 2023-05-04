import { RecruitDetail } from '@/types';

import * as S from './RecruitDetailResults.styled';
import Image from 'next/image';
import { getCurrentDateTime } from '@/utils/getCurrentDateTime';

interface RecruitDetailResultsProps {
  data?: RecruitDetail;
}

const RecruitDetailResults = ({ data }: RecruitDetailResultsProps) => {
  const secondDepthPositions = data?.position_arr?.reduce((acc, cur) => {
    return [...acc, cur?.task?.sub_task_arr?.join(',')];
  }, [] as string[]);

  return (
    <S.RecruitDetailResults>
      <Image
        src={data?.company?.logo_url || ''}
        alt={data?.company?.name || ''}
        width={90}
        height={90}
      />
      <strong>{data?.company?.name}</strong>
      <h2>{data?.title}</h2>
      <br />
      <span>북마크 수 {data?.bookmark}</span>
      <br />
      <span>조회 수 {data?.view}</span>
      <br />
      <span>채용 시작일 {getCurrentDateTime(data?.start_time)}</span>
      <br />
      <span>채용 마감일 {getCurrentDateTime(data?.end_time)}</span>
      <br />
      <br />
      <a href={data?.apply_url} target="_blank" rel="noopener noreferrer">
        지원하기
      </a>

      <h4>직무</h4>
      <br />
      <div>
        {data?.position_arr?.map((item) => {
          return (
            <span
              key={item?.id}
              style={{ display: 'block', width: '100%' }}
            >{`[${item?.task?.main_task}]`}</span>
          );
        })}
      </div>

      <div>
        {secondDepthPositions?.map((item, idx) => {
          return (
            <span key={idx} style={{ display: 'block', width: '100%' }}>
              {item}
            </span>
          );
        })}
      </div>
    </S.RecruitDetailResults>
  );
};

export default RecruitDetailResults;
