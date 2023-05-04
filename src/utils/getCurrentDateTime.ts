import dayjs from 'dayjs';

export const getCurrentDateTime = (date?: string) => {
  if (!date) return '';
  return dayjs(date).format('M월 DD일');
};
