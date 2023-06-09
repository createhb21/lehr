import React from 'react';

import * as S from './Button.styled';

export type ButtonSize = 'xs' | 'sm' | 'smd' | 'md' | 'lg';
export type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  size: ButtonSize;
  variant: ButtonVariant;
  label: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export const Button = ({
  className,
  type = 'button',
  size,
  variant,
  label,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <S.Button
      type={type}
      className={className}
      size={size}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </S.Button>
  );
};
