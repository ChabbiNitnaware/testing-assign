import React from 'react';
import Cards from './Cards';
import Overview from './Overview';
import Customers from './Customers';
import ProductSell from './ProductSell';

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <Cards />
      </div>
      <div className="row">
        <div className="col-8">
          <Overview />
        </div>
        <div className="col-4">
          <Customers />
        </div>
      </div>
      <div className="row">
        <ProductSell />
      </div>
    </div>
);
};

export default Dashboard;
