import React from 'react';
import CustomButton from '../atoms/Button';
import { Container, Button } from '@mui/material';
import Link from 'next/link';

type NavLink = {
  label: string;
  path: string;
};

const links: NavLink[] = [
  { label: 'About', path: '/about' },
  { label: 'Sponsor', path: '/sponsor' },
];

export const NavHeight = '4rem';

export default function Navbar() {
  const renderLinks = links.map((link, id) => {
    return (
      <Link href={link.path} passHref>
        <Button key={id} color='success'>
          {link.label}
        </Button>
      </Link>
    );
  });

  return (
    <div
      style={{
        height: NavHeight,
        // boxShadow: '0 4px 2px -2px rgba(0, 0, 0, 0.185)',
      }}>
      <Container
        maxWidth='xl'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <div className={'right'}>
          <CustomButton label={'logo'} path={'/'} size={2} />
        </div>
        <div
          className={'left'}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          {renderLinks}
        </div>
      </Container>
    </div>
  );
}
