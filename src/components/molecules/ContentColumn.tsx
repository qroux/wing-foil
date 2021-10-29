import React, { ReactNode } from 'react';

export default function ContentColumn({
  header,
  children,
}: {
  header: string;
  children: ReactNode;
}) {
  return (
    <div
      className='col__left'
      style={{
        flex: 0.7,
        marginBottom: '2em',
      }}>
      <h3
        style={{
          fontSize: '1.8rem',
          fontWeight: 600,
        }}>
        {header}
      </h3>

      {children}
    </div>
  );
}
