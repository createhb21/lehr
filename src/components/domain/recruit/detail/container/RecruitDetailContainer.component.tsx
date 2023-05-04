import RecruitDetailResults from '../recruitDetailResults/RecruitDetailResults.component';
import { useRouter } from 'next/router';
import { Suspense } from 'react';

import * as S from './RecruitDetailContainer.styled';
import { useRecruitDetailQuery } from '@/queries/recruit';

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
