'use client';

import { Button } from '@heroui/react';
import type { ButtonProps } from '@heroui/react';
import Link from 'next/link';
import { forwardRef } from 'react';

export interface OutlineButtonProps extends ButtonProps {
  href?: string;
}

const OutlineButton = forwardRef<HTMLButtonElement, OutlineButtonProps>(
  ({ children, href, className = '', ...props }, ref) => {
    const buttonProps = {
      ref,
      variant: 'bordered' as const,
      size: 'lg' as const,
      className: `text-lg font-medium text-white border-white hover:bg-white/10 ${className}`,
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

OutlineButton.displayName = 'OutlineButton';

export default OutlineButton;
