import React from 'react';
import { motion } from 'framer-motion';
import Divider from '../atoms/Divider';
import PriceCardTag from '../atoms/PriceCardTag';

export interface Card {
  photo: string;
  tag?: string[];
  color?: string;
  duration: string;
  title: string[];
  price: number;
  content: string[][];
}

export default function PriceCard({
  card,
  delay,
  langIndex = 0,
}: {
  card: Card;
  delay: number;
  langIndex: number;
}) {
  const { title, price, content, tag, color, duration, photo } = card;

  const renderContent = content[langIndex].map((line, id) => (
    <div
      style={{
        textTransform: 'lowercase',
      }}
      key={id}>
      {line}
    </div>
  ));

  return (
    <motion.div
      onClick={() => {
        if (document) {
          //@ts-ignore
          document
            .getElementById('reservation')
            .scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }}
      className='card__container'
      style={{
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
        backgroundColor: 'white',
        borderRadius: 5,
        width: '100%',
        maxWidth: '25rem',
        minHeight: '15rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      initial={{
        translateY: '-1rem',
        opacity: 0,
      }}
      animate={{
        translateY: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 0.25 * delay,
      }}>
      <div
        className='card__content'
        style={{
          padding: '1rem 1rem',
        }}>
        <div
          className='card__tag'
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <PriceCardTag
            label={tag ? tag[langIndex] : undefined}
            color={color}
          />
          <PriceCardTag label={duration} color={color} outlined={true} />
        </div>

        <div
          className='header'
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <div className='header__title'>
            <h3
              style={{
                textTransform: 'capitalize',
              }}>
              {title[langIndex]}
            </h3>
          </div>
        </div>

        <Divider />

        <div
          className='card__content'
          style={{
            minHeight: '4.5rem',
          }}>
          {renderContent}
        </div>
      </div>

      <div
        className='footer__image'
        style={{
          height: '10rem',
          width: '100%',
          backgroundImage: `radial-gradient(rgba(0,0,0, 0.3), rgba(0,0,0,0)), url(/${photo})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>
        <div
          className='footer__price'
          style={{
            fontSize: '2rem',
            fontWeight: 500,
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
          {price} €
        </div>
      </div>
    </motion.div>
  );
}
