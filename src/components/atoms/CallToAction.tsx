import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import React from 'react';

const CTAContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    textAlign: 'center',
  },
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginLeft: '1rem',
  },
}));

export default function CallToAction({ label }: { label: string }) {
  return (
    <CTAContainer
      style={{
        padding: '2rem 0',
      }}>
      <Link href='/cours' passHref>
        <Button
          variant='contained'
          color='error'
          size='large'
          style={{
            fontWeight: 'bold',
          }}>
          {label}
        </Button>
      </Link>
    </CTAContainer>
  );
}
