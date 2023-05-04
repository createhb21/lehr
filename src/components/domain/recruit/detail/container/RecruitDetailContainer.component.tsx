import { Suspense } from 'react';
import { useRouter } from 'next/router';

import { useRecruitDetailQuery } from '@/queries/recruit';

import * as S from './RecruitDetailContainer.styled';

import RecruitDetailResults from '../recruitDetailResults/RecruitDetailResults.component';

const RecruitDetailContainer = () => {
  const {
    query: { id },
  } = useRouter();
  const { data: recruitDetailData } = useRecruitDetailQuery(id as string);

  return (
    <S.RecruitDetailContainer>
      <Suspense>
        <RecruitDetailResults data={recruitDetailData?.data} />
      </Suspense>
    </S.RecruitDetailContainer>
  );
};

export default RecruitDetailContainer;
