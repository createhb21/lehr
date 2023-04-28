import { RecruitDetail } from '@/types';
import * as S from './RecruitDetailResults.styled';

interface RecruitDetailResultsProps {
  data?: RecruitDetail;
}

const RecruitDetailResults = ({ data }: RecruitDetailResultsProps) => {
  return (
    <S.RecruitDetailResults>
      <h2>{data?.company?.name}</h2>
      <strong>{data?.title}</strong>
    </S.RecruitDetailResults>
  );
};

export default RecruitDetailResults;
