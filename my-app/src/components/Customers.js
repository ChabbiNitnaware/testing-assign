import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { value: 25 },
  { value: 32 },
  { value: 43 },
];

const COLORS = ['#FA48B2', '#EEE8F3 ', '#C48EF3']; // Colors for segments



const Customers = () => {
  return (
    <div>
        <div className="row">
            <div className="col-4">
                <h4>Customers</h4>
                <p className='text-muted size'>Customers that buy products</p>
              <div>
                <PieChart width={300} height={300}>
                <Pie
                  dataKey="value"
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                </PieChart>
              </div>
            </div>
          </div>
    </div>
);
};

export default Customers;
