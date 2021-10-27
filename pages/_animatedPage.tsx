import { fabClasses } from '@mui/material';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedPage({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{
        opacity: 0.5,
        y: '0.5rem',
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0.5,
        y: '0.5rem',
      }}>
      {children}
    </motion.div>
  );
}
