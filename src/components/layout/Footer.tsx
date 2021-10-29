import React from 'react';

const items = [
  { label: 'Contact' },
  { label: 'CGV' },
  { label: 'Mentions légales' },
];

export default function Footer() {
  const renderItems = items.map((item, id) => {
    return <p key={id}>{item.label}</p>;
  });

  return (
    <div
      style={{
        minHeight: '15rem',
        backgroundColor: '#182225',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        color: 'white',
      }}>
      <div className='items'>{renderItems}</div>
    </div>
  );
}
