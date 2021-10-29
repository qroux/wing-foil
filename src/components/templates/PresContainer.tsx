import React, { ReactNode } from 'react';
import { Container, styled } from '@mui/material';

const ResponsiveContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
    marginTop: '3rem',
    marginBottom: '3rem',
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'column',
    marginTop: '3rem',
    marginBottom: '3rem',
  },
  [theme.breakpoints.up('md')]: {
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
