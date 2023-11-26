import React from "react";
import EarningsHeader from "../EarningsHeader";
import { useLogData } from "../../generics/useLogData/useLogData";
import loader from '../../assets/icons8-spinner.gif';
import "./home.scss";

function Home() {
  const { expenseData, walletData, isExpenseDataLoading, isWalletDataLoading } = useLogData();
  
  return (
    <div className="home-container">
      <EarningsHeader />
      <div className="accordion-card">
        {(isExpenseDataLoading || isWalletDataLoading) ?
          <div className="loader"><img src={loader} /></div>
          : 
          <div>
            
          </div>
        }
      </div>
    </div>
  );
}

export default Home;
