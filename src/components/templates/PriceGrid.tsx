import React from 'react';
import PriceCard, { Card } from '../molecules/PriceCard';

export default function PriceGrid({
  cards,
  langIndex,
}: {
  cards: Card[];
  langIndex: number;
}) {
  const renderCards = cards.map((card, id) => (
    <PriceCard card={card} key={id} delay={id} langIndex={langIndex} />
  ));

  return (
    <div
      className='grid__container'
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
        gridGap: '3rem',
        gridRowGap: '2rem',
      }}>
      {renderCards}
    </div>
  );
}
