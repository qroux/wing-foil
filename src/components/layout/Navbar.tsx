import React from 'react';
import Button from '../atoms/Button';
import { Container } from '@mui/material';

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
    return <Button label={link.label} path={link.path} size={4} key={id} />;
  });

  return (
    <div
      style={{
        backgroundColor: 'rgba(255,255,255, 0)',
        // boxShadow: '0 4px 2px -2px rgba(0, 0, 0, 0.185)',
      }}>
      <Container
        maxWidth='xl'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: NavHeight,
        }}>
        <div className={'right'}>
          <Button label={'logo'} path={'/'} size={2} />
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
