import React from 'react';
import AccessTimeIcon from '@mui/icons-material/Timer';

export default function PriceCardTag({
  label,
  color = 'black',
  outlined = false,
}: {
  label?: string;
  color?: string;
  outlined?: boolean;
}) {
  return (
    <div
      className='tag'
      style={{
        backgroundColor: label && !outlined ? color : 'transparent',
        borderRadius: 5,
        color: outlined ? color : 'white',
        fontWeight: 400,
        maxWidth: '7.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 0.4rem',
      }}>
      {outlined ? <AccessTimeIcon fontSize='small' /> : null}{' '}
      {label ? label : '-'}
    </div>
  );
}
