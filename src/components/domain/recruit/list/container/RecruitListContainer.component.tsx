import { Suspense } from 'react';

import { RecruitListQueryModel } from '@/types/recruit';
import * as S from './RecruitListContainer.styled';
import RecruitListResults from '../recruitListResults/RecruitListResults.component';

interface RecruitListContainerProps {
  filters: RecruitListQueryModel;
}

const RecruitListContainer = ({ filters }: RecruitListContainerProps) => {
  return (
    <S.RecruitListContainer>
      <Suspense fallback={<div />}>
        <RecruitListResults filters={filters} />
      </Suspense>
      {/* <Suspense fallback={<div />}>
        <RecommendList />
      </Suspense> */}
    </S.RecruitListContainer>
  );
};

export default RecruitListContainer;
