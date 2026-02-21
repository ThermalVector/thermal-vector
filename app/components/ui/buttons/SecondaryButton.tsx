'use client';

import { Button } from '@heroui/react';
import type { ButtonProps } from '@heroui/react';
import Link from 'next/link';
import { forwardRef } from 'react';

export interface SecondaryButtonProps extends ButtonProps {
  href?: string;
}

const SecondaryButton = forwardRef<HTMLButtonElement, SecondaryButtonProps>(
  ({ children, href, className = '', ...props }, ref) => {
    const buttonProps = {
      ref,
      color: 'secondary' as const,
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

SecondaryButton.displayName = 'SecondaryButton';

export default SecondaryButton;
