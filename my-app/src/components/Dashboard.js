import React from 'react';
import { FaDollarSign, FaListAlt, FaBalanceScale} from 'react-icons/fa';
import { TbShoppingBag } from "react-icons/tb";

const cardData = [
  {
    icon: FaDollarSign,
    title:'Earning',
    amount: '$198k',
    content: '37.8% this month',
  },
  {
    icon: FaListAlt,
    title:'Orders',
    amount: '$2.4k',
    content: '2% this month',
  },
  {
    icon: FaBalanceScale,
    title:'Balance',
    amount: '$2.4k',
    content: '2% this month',
  },
  {
    icon: TbShoppingBag,
    title:'Total Sales',
    amount: '$89k',
    content: '11% this week',
  },
];

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="rounded-circle bg-opacity-10 card-color p-3">
                   {React.createElement(card.icon, { size: 60, color: 'white' })} 
                  </div>
                  <div className="ms-3">
                    <p className="card-title text-muted">{card.title}</p>
                    <h5 className='card-text '>{card.amount}</h5>
                    <p className="card-text">{card.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
);
};

export default Dashboard;
