import { recruitKeys } from '@/queries/queryKeys/recruit';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

import * as api from '@/apis/recruit';
import * as type from '@/types/recruit';

export const useRecruitDetailQuery = (
  recruitId: type.RecruitDetailQueryModel['recruitId'],
): UseQueryResult<type.RecruitDetailServerModel> => {
  return useQuery(recruitKeys.detail(recruitId), () => api.fetchRecruitDetail({ recruitId }));
};
