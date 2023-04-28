import { Suspense } from 'react';

import { RecruitDetail } from '@/types';
import * as S from './RecruitDetailContainer.styled';
import RecruitDetailResults from '../recruitDetailResults/RecruitDetailResults.component';

interface RecruitDetailContainerProps {
  data?: RecruitDetail;
}

const RecruitDetailContainer = ({ data }: RecruitDetailContainerProps) => {
  return (
    <S.RecruitDetailContainer>
      <Suspense fallback={<div />}>
        <RecruitDetailResults data={data} />
      </Suspense>
      {/* <Suspense fallback={<div />}>
        <RecommendList />
      </Suspense> */}
    </S.RecruitDetailContainer>
  );
};

export default RecruitDetailContainer;
