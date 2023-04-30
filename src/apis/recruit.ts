import type * as type from '@/types/recruit';
import { ax } from './axios';

export const fetchRecruitList = async (
  req: type.RecruitListQueryModel,
): Promise<type.RecruitListServerModel> => {
  const res = await ax.get('/v1/jds', { params: req });
  return res.data;
};

export const fetchRecruitDetail = async (
  req: type.RecruitDetailQueryModel,
): Promise<type.RecruitDetailServerModel> => {
  const res = await ax.get(`/v1/jds/${req.recruitId}`);
  return res.data;
};
