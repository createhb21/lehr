import dayjs from 'dayjs';

export const getCurrentDateTime = (date?: string) => {
  if (!date) return '';
  return dayjs(date).format('YYYY년 MM월 DD일');
};
