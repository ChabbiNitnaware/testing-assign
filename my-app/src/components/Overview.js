import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
const data = [{name: 'Jan', uv: 270, pv: 2400, amt: 2400},
              {name: 'Feb', uv: 220, pv: 1200, amt: 1200},
              {name: 'Mar', uv: 380, pv: 1200, amt: 1200},
              {name: 'Apr', uv: 240, pv: 1200, amt: 1200},
              {name: 'May', uv: 250, pv: 1200, amt: 1200},
              {name: 'Jun', uv: 200, pv: 1200, amt: 1200},
              {name: 'Jul', uv: 285, pv: 1200, amt: 1200},
              {name: 'Aug', uv: 400, pv: 1200, amt: 1200},
              {name: 'Sep', uv: 380, pv: 1200, amt: 1200},
              {name: 'Oct', uv: 340, pv: 1200, amt: 1200},
              {name: 'Nov', uv: 310, pv: 1200, amt: 1200},
              {name: 'Dec', uv: 360, pv: 1200, amt: 1200},
];


const Overview = () => {
  return (
    <div>
        <div className="row">
            <div className="col-8">
                <h2>Overview</h2>
                <p className='text-muted'>Monthly Earning</p>
            </div>
            <div className="col-4">
                <div className="dropdown">
                    <button className="btn dropdown-toggle btn-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Quantity
                    </button>
                    <ul class="dropdown-menu">
                        <li><button class="dropdown-item" type="button">Action</button></li>
                        <li><button class="dropdown-item" type="button">Another action</button></li>
                        <li><button class="dropdown-item" type="button">Something else here</button></li>
                    </ul>
                </div>
            </div>
            <div>
        </div>
            <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="uv" fill="#8884d8" barSize={30} />
            </BarChart>
        </div>
    </div>
);
};

export default Overview;
