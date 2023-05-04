import { TagBtn } from '@/components/common';

import type { SelectedFilterTag } from '@/types';

import { ResetIcon } from '@/assets/icons';

import * as S from './FilterManagement.styled';

interface FilterManagementProps<T> {
  selectedFilterTags: T;
  onDelete: (tag: SelectedFilterTag<any, any>) => () => void;
  onReset: () => void;
}

export const FilterManagement = <T extends SelectedFilterTag<any, any>[]>({
  selectedFilterTags,
  onDelete,
  onReset,
}: FilterManagementProps<T>) => {
  return (
    <S.FilterManagement>
      <S.TagList>
        {selectedFilterTags.map((tag) => (
          <li key={tag.label}>
            <TagBtn css={S.tagBtn} variant="ghost" label={tag.label} onDelete={onDelete(tag)} />
          </li>
        ))}
      </S.TagList>
      <S.ResetBtn type="button" onClick={onReset}>
        <ResetIcon />
        <span>필터 초기화</span>
      </S.ResetBtn>
    </S.FilterManagement>
  );
};
