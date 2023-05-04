export const formatMetaDescription = (desc: string | undefined): string => {
  if (!desc) return '';
  const result = desc.replace(/\n/g, '');

  return result.substring(0, 158);
};
