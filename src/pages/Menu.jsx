import React from 'react';
import coffeeProductsData from '../data/coffeeProductsData';

const Menu = () => {
  return (
    <div className='bg-light'>
      <center>
        <p className="pacifico-regular text-capitalize py-5" style={{ fontSize: '60px' }}>
          What we offer
        </p>
      </center>
      <div style={{ minHeight: '81vh' }} className='d-flex w-full'>
        <div className="container">
          <div className="row justify-content-center">
            {coffeeProductsData.map((product, index) => (
              <div key={index} style={{ height: '20rem', width: '18rem' }} data-bs-toggle="modal" data-bs-target={`#${product.name}`} >
                <span style={{ cursor: 'pointer' }}>{product.imageUrl}</span>
                <h4 className='pacifico-regular' style={{ color: '#402a23', cursor: 'pointer' }}>{product.name}</h4>
                <span className='pacifico-regular' style={{ color: '#402a23' }}>₱{product.price}</span>

                <div className="modal fade" id={`${product.name}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-dark text-light border-0">
                      <div className="modal-header border-0">
                        <h1 className="modal-title fs-4 pacifico-regular text-light" id="staticBackdropLabel">{product.name}</h1>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        {product.imageUrl}
                        <p className="fs-6"><strong>Price:</strong> {product.price}</p>
                        <p className="fs-6"><strong>Description:</strong> {product.description}</p>
                      </div>
                      <div className="modal-footer border-0">
                        <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
