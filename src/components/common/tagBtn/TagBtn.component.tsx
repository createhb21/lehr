import React from 'react';

import type { TagVariant } from '@/types';

import { CloseIcon } from '@/assets/icons';

import * as S from './TagBtn.styled';

interface TagBtnProps {
  className?: string;
  label: string;
  variant?: TagVariant;
  disabled?: boolean;
  onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TagBtn = ({
  className,
  label,
  variant = 'primary',
  disabled = false,
  onDelete,
}: TagBtnProps) => {
  return (
    <S.TagBtn
      type="button"
      className={className}
      variant={variant}
      disabled={disabled}
      onClick={onDelete}
    >
      <span>{label}</span>
      {!disabled && onDelete && <CloseIcon />}
    </S.TagBtn>
  );
};
