import React from "react";
import ReactCountUp from "react-countup";
import { motion } from "framer-motion";
import "./assert-card.scss";

interface AssertsCard {
  icon: string;
  heading: React.ReactNode;
  amount: number;
}

function AssertsCard({ icon, heading, amount }: AssertsCard) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="assert-card"
    >
      <section>
        <img src={icon} height={50} width={50} className="assert-image" />
      </section>
      <section className="assert-header">
        <span>{heading}</span>
      </section>
      <section>
        <ReactCountUp
          start={0}
          end={amount}
          duration={4}
          className="assert-count"
          prefix="$ "
        />
      </section>
    </motion.article>
  );
}
export default AssertsCard;
