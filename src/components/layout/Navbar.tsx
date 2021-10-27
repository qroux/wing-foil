import React from 'react';
import NavbarLink from '../atoms/NavbarLink';
import { Button, Container, useTheme, styled } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
// import logo from '../../../public/surf.png';
import { motion } from 'framer-motion';
import HomeLogo from '@mui/icons-material/HomeTwoTone';

type NavLink = {
  label: string;
  path: string;
  accent?: boolean;
};

const links: NavLink[] = [
  // { label: 'About', path: '/about' },
  // { label: 'Sponsor', path: '/sponsor' },
  { label: 'Cours', path: '/cours', accent: true },
];

export const NavHeight = '4rem';

export default function Navbar() {
  const theme = useTheme();

  const renderLinks = links.map((link, id) => {
    return (
      <Link href={link.path} key={id} passHref>
        <Button
          color={link.accent ? 'error' : 'inherit'}
          variant={link.accent ? 'contained' : 'text'}
          style={{
            marginLeft: '1rem',
            fontWeight: 700,
          }}>
          {link.label}
        </Button>
      </Link>
    );
  });

  return (
    <div
      style={{
        opacity: 1,
        // boxShadow: '0 4px 2px -2px rgba(0, 0, 0, 0.185)',
        // position: 'fixed',
        // top: 0,
        // left: 0,
        // width: '100%',
        // backgroundColor: theme.palette.background.default,
      }}>
      <Container
        disableGutters={false}
        maxWidth='xl'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: NavHeight,
        }}>
        <div className={'right'}>
          <Link href={'/'} passHref>
            <a
              style={{
                color: 'black',
              }}>
              <HomeLogo fontSize='large' />
            </a>
          </Link>
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
