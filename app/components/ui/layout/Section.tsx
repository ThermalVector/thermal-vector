import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({
  children,
  className = '',
  containerClassName = '',
}: SectionProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className={`container mx-auto px-4 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
