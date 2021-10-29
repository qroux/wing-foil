import React, { ReactNode } from 'react';
import { Container, styled } from '@mui/material';

const ResponsiveContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    marginTop: '5rem',
    marginBottom: '5rem',
  },
}));

export default function PresContainer({ children }: { children: ReactNode }) {
  return (
    <ResponsiveContainer
      maxWidth='lg'
      className='presentation'
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      {children}
    </ResponsiveContainer>
  );
}
