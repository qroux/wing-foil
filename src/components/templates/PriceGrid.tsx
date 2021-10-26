import React from 'react';
import PriceCard, { Card } from '../molecules/PriceCard';

export default function PriceGrid({ cards }: { cards: Card[] }) {
  const renderCards = cards.map((card, id) => (
    <PriceCard card={card} key={id} />
  ));

  return (
    <div
      className='grid__container'
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(20rem, 1fr))',
        gridGap: '3rem',
        gridRowGap: '1rem',
      }}>
      {renderCards}
    </div>
  );
}
