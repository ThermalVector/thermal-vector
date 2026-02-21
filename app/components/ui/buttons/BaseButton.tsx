'use client';

import { Button } from '@heroui/react';
import type { ButtonProps } from '@heroui/react';
import Link from 'next/link';
import { forwardRef } from 'react';

export type ButtonVariant = 'primary' | 'outline' | 'secondary';

// Omit the props that cause conflicts
export interface BaseButtonProps extends Omit<
  ButtonProps,
  'color' | 'variant'
> {
  href?: string;
  variant?: ButtonVariant;
}

type VariantStyle = {
  color?: ButtonProps['color'];
  variant?: ButtonProps['variant'];
  className: string;
};

const variantStyles: Record<ButtonVariant, VariantStyle> = {
  primary: {
    color: 'primary',
    className: 'text-lg font-medium',
  },
  outline: {
    variant: 'bordered',
    className: 'text-lg border-white text-white hover:bg-white/10 font-medium',
  },
  secondary: {
    color: 'secondary',
    className: 'text-lg font-medium',
  },
};

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ children, href, variant = 'primary', className = '', ...props }, ref) => {
    const styles = variantStyles[variant];

    const buttonProps = {
      ref,
      className: `${styles.className} ${className}`,
      color: styles.color,
      variant: styles.variant,
      ...props,
    };

    if (href) {
      return (
        <Button {...buttonProps} as={Link} href={href}>
          {children}
        </Button>
      );
    }

    return <Button {...buttonProps}>{children}</Button>;
  },
);

BaseButton.displayName = 'BaseButton';

export default BaseButton;
