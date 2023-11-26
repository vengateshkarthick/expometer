import React from "react";
import { AnimatePresence } from "framer-motion";
import AssertsCard from "../../Components/AssertsCard";
import expenses from "../../assets/creditcard.svg";
import income from "../../assets/process.svg";
import savings from "../../assets/money.svg";
import "./earnings-header.scss";

const earnings = [
  {
    heading: "Income",
    icon: income,
    amount: 5000,
  },
  {
    heading: "Savings",
    icon: savings,
    amount: 500,
  },
  {
    heading: "Expenses",
    icon: expenses,
    amount: 4500,
  },
];
function EarningsHeader() {
  return (
    <AnimatePresence>
      <div className="asset-card-container">
        {earnings.map((val) => (
          <AssertsCard {...val} />
        ))}
      </div>
    </AnimatePresence>
  );
}

export default EarningsHeader;
