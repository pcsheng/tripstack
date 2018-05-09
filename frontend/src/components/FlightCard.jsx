import React from 'react';

const FlightCard = ({ children }) => {
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default FlightCard;