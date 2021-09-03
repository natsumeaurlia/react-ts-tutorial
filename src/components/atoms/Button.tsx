import React from 'react';
import './button.css';

interface ButtonProps {
  color?: 'red' | 'blue' | 'green';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  disabled: boolean;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  color = 'red',
  size = 'medium',
  disabled = false,
  onClick,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type="button"
      className={[
        'button',
        `button--${size}`,
        `${disabled ? 'button--disabled' : ''}`,
      ].join(' ')}
      style={{ backgroundColor: disabled ? '' : color }}
      {...props}
    >
      {children}
    </button>
  );
};
