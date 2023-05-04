import { RefObject, useRef } from 'react';

import { useDialog } from '@/hooks';

import { ValueOf } from '@/types/common';
import { RecruitListQueryModel } from '@/types/recruit';

import * as S from './Filter.styled';
import { ITEM_FOCUS_ID } from '@/constants';

interface FilterProps {
  id: string;
  name: string;
  placeholder: string;
  options: { [key: string]: string };
  selectedOption: string;
  onSelect: (opt: ValueOf<Pick<RecruitListQueryModel, 'order' | 'filter'>>) => void;
}

export const Filter = ({
  id,
  name,
  placeholder,
  selectedOption,
  options,
  onSelect,
}: FilterProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    isOpen: isDialogOpen,
    dialogRef: selectBoxRef,
    handleToggleDialog,
    handleDialogClose,
  } = useDialog();

  const UUID = `filter-${id}`;

  const handleClickOption = (option: string) => () => {
    onSelect(option as ValueOf<Pick<RecruitListQueryModel, 'order' | 'filter'>>);
    handleDialogClose();
  };

  const buttonLabel = selectedOption ? (
    <S.SelectedOption>{options[selectedOption]}</S.SelectedOption>
  ) : (
    <S.Placeholder>{placeholder}</S.Placeholder>
  );

  return (
    <S.Filter ref={containerRef}>
      <S.OpenerBtn
        type="button"
        aria-controls={UUID}
        aria-expanded={isDialogOpen}
        aria-label={`${placeholder} 필터`}
        aria-haspopup="listbox"
        onClick={handleToggleDialog}
      >
        {buttonLabel}
        <S.ArrowIcon />
      </S.OpenerBtn>
      <S.FilterDropbox
        ref={selectBoxRef as RefObject<HTMLDivElement>}
        id={id}
        tabIndex={0}
        isOpen={isDialogOpen}
        role="listbox"
        aria-label={placeholder}
        aria-hidden={!isDialogOpen}
        aria-activedescendant={isDialogOpen ? ITEM_FOCUS_ID : ''}
      >
        <S.OptionList>
          {Object.entries(options).map(([value, label]) => (
            <S.Option key={value} role="option" aria-selected={selectedOption === value}>
              <button type="button" name={name} onClick={handleClickOption(value)}>
                {label}
              </button>
            </S.Option>
          ))}
        </S.OptionList>
      </S.FilterDropbox>
    </S.Filter>
  );
};
