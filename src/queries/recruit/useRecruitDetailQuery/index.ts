import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { StandardResponseModel } from '@/types';
import * as type from '@/types/recruit';

import * as api from '@/apis/recruit';
import { recruitKeys } from '@/queries/queryKeys/recruit';

export const useRecruitDetailQuery = (
  recruitId: type.RecruitDetailQueryModel['recruitId'],
): UseQueryResult<StandardResponseModel<type.RecruitDetail>> => {
  return useQuery(recruitKeys.detail(recruitId), () => api.fetchRecruitDetail({ recruitId }));
};
