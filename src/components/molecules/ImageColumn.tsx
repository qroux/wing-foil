import React from 'react';

export default function ImageColumn({
  imagePath = '/sylvain-min-gimp.webp',
}: {
  imagePath: string;
}) {
  return (
    <div
      className='col__right'
      style={{
        flex: 0.3,
        width: '100%',
      }}>
      <div
        className='image__container'
        style={{
          backgroundImage: `url(${imagePath})`,
          backgroundSize: 'cover',
          width: '100%',
          maxWidth: '25rem',
          height: '100%',
          minHeight: '15rem',
          backgroundPosition: 'center',
          borderRadius: 2,
        }}
      />
    </div>
  );
}
