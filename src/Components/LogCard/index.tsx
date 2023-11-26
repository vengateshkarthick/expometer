import React from 'react'
import { motion } from 'framer-motion';
import kebabIcon from '../../assets/kebab.svg';
import './log-card.scss';


interface ELogCard {
  id?: number;
  date?: string;
  amount?: string;
  amount_in_words?: string;
  source?: string;
  currency_type?: string;
  category?: string;
  desc?: string;
  type: "wallet" | "expenses";
}

function LogCard({ amount_in_words, source, type, desc, category }: ELogCard) {
  return (
    <motion.div
      className={`log-card ${type}`}
      initial={{ opacity: 0, translateY: "-100%" }}
      animate={{ opacity: 1, translate: "0px" }}
    >
      <section className='first-section'>
        <div>{amount_in_words}</div>
        <div className='kebab-menu'>{<img src={kebabIcon} alt='menu' />}</div>
      </section>
      <section className='second-section'>
        <div className='pill'>{source}</div>
        <div className='pill'>{category}</div>
      </section>
      <section>
        <p>{desc}</p>
      </section>
    </motion.div>
  );
}

export default LogCard;