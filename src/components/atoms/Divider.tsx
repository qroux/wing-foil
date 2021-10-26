import { background } from '@storybook/theming';
import React from 'react';

export default function Divider() {
  return (
    <div
      style={{
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(0,0,0, 0.05)',
      }}
    />
  );
}
