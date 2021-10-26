import { useTheme } from '@mui/material';
import React from 'react';
import Divider from '../atoms/Divider';

export interface Card {
  title: string;
  price: number;
  content: string[];
}

export default function PriceCard({ card }: { card: Card }) {
  const theme = useTheme();
  const { title, price, content } = card;

  const renderContent = content.map((line, id) => <li key={id}>{line}</li>);

  return (
    <div
      className='card__container'
      style={{
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
        backgroundColor: 'white',
        borderRadius: 5,
        width: '100%',
        padding: '2rem 1rem',
      }}>
      <div
        className='header'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <div className='header__title'>
          <h3>{title}</h3>
        </div>
        <div
          className='header__price'
          style={{
            minWidth: '4rem',
            width: '4rem',
          }}>
          <h3>{price} €</h3>
        </div>
      </div>

      <Divider />

      <div className='card__content'>
        <ul>{renderContent}</ul>
      </div>
    </div>
  );
}
