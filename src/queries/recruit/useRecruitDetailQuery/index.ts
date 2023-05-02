import { recruitKeys } from '@/queries/queryKeys/recruit';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

import * as api from '@/apis/recruit';
import * as type from '@/types/recruit';
import { StandardResponseModel } from '@/types';

export const useRecruitDetailQuery = (
  recruitId: type.RecruitDetailQueryModel['recruitId'],
): UseQueryResult<StandardResponseModel<type.RecruitDetail>> => {
  return useQuery(recruitKeys.detail(recruitId), () => api.fetchRecruitDetail({ recruitId }));
};
