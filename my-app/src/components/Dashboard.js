import React from 'react';

const cardData = [
  {
    imageSrc: 'https://via.placeholder.com/150',
    title:'Earning',
    amount: '$198k',
    content: '37.8% this month',
  },
  {
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Card 2',
    content: 'This is the content of card 2.',
  },
  {
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Card 3',
    content: 'This is the content of card 3.',
  },
  {
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Card 4',
    content: 'This is the content of card 4.',
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
                  <div className="rounded-circle bg-light bg-opacity-10 p-3">
                    <img src={card.imageSrc} alt={card.title} className="img-fluid" />
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
