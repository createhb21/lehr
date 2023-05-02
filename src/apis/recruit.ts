import type * as type from '@/types/recruit';
import { StandardResponseModel } from '@/types';
import { ax } from './axios';

export const fetchRecruitList = async (
  req: type.RecruitListQueryModel,
): Promise<StandardResponseModel<type.RecruitOverview>> => {
  const res = await ax.get('/v1/jds', { params: req });
  return res.data;
};

export const fetchRecruitDetail = async (
  req: type.RecruitDetailQueryModel,
): Promise<StandardResponseModel<type.RecruitDetail>> => {
  const res = await ax.get(`/v1/jds/${req.recruitId}`);
  return res.data;
};
