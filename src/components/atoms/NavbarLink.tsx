import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import { NavHeight } from '../layout/Navbar';
import { motion } from 'framer-motion';

type State = {
  label: string;
  path: string;
  size: 1 | 2 | 3 | 4 | 5 | 6;
};

export default function Button({
  label = 'To change',
  path = '/',
  size = 1,
}: State) {
  const HtmlTag = `h${size}` as keyof JSX.IntrinsicElements;

  return (
    <Link href={path} passHref>
      <motion.div
        style={{
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '5rem',
        }}>
        <HtmlTag
          style={{
            margin: 0,
          }}>
          {label}
        </HtmlTag>
      </motion.div>
    </Link>
  );
}
