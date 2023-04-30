export const createPageList = (currentPage: number, maxPageCount: number, totalPages: number) => {
  const result = [];
  const firstIndex = Math.floor((currentPage - 1) / maxPageCount) * maxPageCount + 1;
  const lastIndex = Math.min(firstIndex + maxPageCount - 1, totalPages);

  for (let i = firstIndex; i <= lastIndex; i++) {
    result.push(i);
  }

  return result;
};
