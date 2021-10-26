import React from 'react';

export default function PriceCardTag({
  tag = '-',
  color = 'transparent',
}: {
  tag?: string;
  color?: string;
}) {
  return (
    <div
      className='tag'
      style={{
        backgroundColor: color,
        borderRadius: 5,
        color: 'white',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
      }}>
      {tag}
    </div>
  );
}
