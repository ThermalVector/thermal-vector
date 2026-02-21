'use client';

import { Button } from '@heroui/react';
import type { ButtonProps } from '@heroui/react';
import Link from 'next/link';
import { forwardRef } from 'react';

export interface PrimaryButtonProps extends ButtonProps {
  href?: string;
}

const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ children, href, className = '', ...props }, ref) => {
    const buttonProps = {
      ref,
      color: 'primary' as const,
      size: 'lg' as const,
      className: `text-lg font-medium ${className}`,
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

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
