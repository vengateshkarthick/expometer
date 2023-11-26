import React from "react";
import EarningsHeader from "../EarningsHeader";
import "./home.scss";
import { useLogData } from "../../generics/useLogData/useLogData";

function Home() {
  const {expenseData, walletData, isExpenseDataLoading, isWalletDataLoading} = useLogData();
  
  return (
    <div className="home-container">
      <EarningsHeader />
      <div className="accordion-card">
        
      </div>
    </div>
  );
}

export default Home;
