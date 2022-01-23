import React from "react";
import "./rightbar.css";
import notification from "../../assets/notification.png";
import { transactions } from "../../data";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="rightbarTop">
          <img src={notification} alt="notification" />
        </div>
        <div className="rightbarCenter">
          <p className="dashboardText">Dashboard</p>
          <div className="transactions">
            <div className="transactionDetail">
              <p className="trans-text">TRANSACTIONS SUCCESSFUL</p>
              <p className="nums">11</p>
            </div>
            <div className="transactionDetail">
              <p className="trans-text">TRANSACTIONS PENDING</p>
              <p className="nums">9</p>
            </div>
            <div className="transactionDetail">
              <p className="trans-text">TRANSACTIONS FAILED</p>
              <p className="nums">452</p>
            </div>
          </div>
        </div>
        <div className="rightbarBottom">
          <p>Transaction History</p>
          <div className="transactionTable">
            <table>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                    Service type
                  </th>
                  <th>Service Cost</th>
                  <th>Technician</th>
                  <th>Review</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>
                      <input type="checkbox" />
                      {transaction.serviceType}
                    </td>
                    <td>&#8358;{transaction.serviceCost}</td>
                    <td>{transaction.technician}</td>
                    <td>{transaction.review}</td>
                    <td>{transaction.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
