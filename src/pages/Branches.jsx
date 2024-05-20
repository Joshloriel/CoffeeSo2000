import React from 'react';
import { branchesInIloiloCity } from '../data/BranchesData';

const Branches = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <h1 className="text-center mb-5 pacifico-regular">Our Branches</h1>
        <div className="row">
          {branchesInIloiloCity.map((branch, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card border-0 shadow">
                <div className="card-body">
                  <h5 className="card-title mb-3">{branch.name}</h5>
                  <p className="card-text"><strong>Location:</strong> {branch.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Branches;
