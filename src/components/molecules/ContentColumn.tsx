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
        // paddingRight: '1.5rem',
      }}>
      <h3
        style={{
          fontSize: '2rem',
          fontWeight: 600,
        }}>
        {header}
      </h3>

      {children}
    </div>
  );
}
