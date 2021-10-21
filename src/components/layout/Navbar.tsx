import React from 'react';
import Link from 'next/link';
import Button from '../atoms/Button';

type NavLink = {
  label: string;
  path: string;
};

const links: NavLink[] = [{ label: 'About', path: '/about' }];

export default function Navbar() {
  const renderLinks = links.map((link, id) => {
    return <Button label={link.label} path={link.path} size={4} key={id} />;
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '5rem',
        padding: '0 2rem',
        boxShadow: '0 4px 2px -2px rgba(0, 0, 0, 0.185)',
      }}>
      <div className={'right'}>
        <Button label={'logo'} path={'/'} size={2} />
      </div>
      <div className={'left'}>{renderLinks}</div>
    </div>
  );
}
