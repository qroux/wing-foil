import React, { ReactNode } from 'react';
import Link from 'next/link';

type State = {
  label: string;
  path: string;
  size: 1 | 2 | 3 | 4 | 5 | 6;
};

export default function Button({ label, path, size }: State) {
  const HtmlTag = `h${size}` as keyof JSX.IntrinsicElements;

  return (
    <Link href={path} passHref>
      <div
        style={{
          cursor: 'pointer',
          border: '1px solid transparent',
        }}>
        <HtmlTag>{label}</HtmlTag>
      </div>
    </Link>
  );
}
