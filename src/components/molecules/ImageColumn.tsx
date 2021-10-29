import { styled } from '@mui/material';
import React from 'react';

const ImageContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    marginRight: '0',
  },
  [theme.breakpoints.up('sm')]: {
    marginRight: '6rem',
  },
  [theme.breakpoints.up('md')]: {
    marginRight: 0,
  },
}));

export default function ImageColumn({
  imagePath = '/sylvain-min-gimp.webp',
}: {
  imagePath?: string;
}) {
  return (
    <ImageContainer
      className='image__container'
      style={{
        flex: 0.3,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)), url(${imagePath})`,
        backgroundSize: 'cover',
        width: '100%',
        maxWidth: '25rem',
        height: '100%',
        minHeight: '15rem',
        backgroundPosition: 'center',
        borderRadius: 2,
      }}
    />
  );
}
