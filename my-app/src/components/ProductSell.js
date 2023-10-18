import React from 'react';
import { Link } from 'react-router-dom';
import Table from './Table';

const ProductSell = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid col-11">
            <h5 className="navbar-brand bg-light">Product Sell</h5>
            <form className="d-flex">  
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>
        </div>
        <div className="col-1">
          <div class="dropdown">
              <button class="btn dropdown-toggle btn-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Last 30 days
              </button>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="#">Action</Link></li>
              </ul>
            </div>
        </div>
      </nav>
      <Table />
    </div>
    
);
};

export default ProductSell;
