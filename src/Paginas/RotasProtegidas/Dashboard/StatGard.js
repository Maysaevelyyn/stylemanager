import React from 'react';

function StatCard({ title, value, icon }) {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="card shadow-sm">
        <div className="card-body d-flex align-items-center">
          <div className="me-3">
            <i className={`bi ${icon} fs-2`}></i>
          </div>
          <div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{value}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
