import React from 'react'

export default function CartColumns() {
  return (
    <div className='container-fluid text-center d-none d-lg-block'>
        <div className='row'>
            <div className='col-10 mx-auto col-lg-2'>
                  <p className='text-uppercase fw-bold'>products</p>
            </div>
              <div className='col-10 mx-auto col-lg-2'>
                  <p className='text-uppercase fw-bold'>Name of product</p>
              </div>
              <div className='col-10 mx-auto col-lg-2'>
                  <p className='text-uppercase fw-bold'>Price</p>
              </div>
              <div className='col-10 mx-auto col-lg-2'>
                  <p className='text-uppercase fw-bold'>Quantity</p>
              </div>
              <div className='col-10 mx-auto col-lg-2'>
                  <p className='text-uppercase fw-bold'>Remove</p>
              </div>
              <div className='col-10 mx-auto col-lg-2'>
                  <p className='text-uppercase fw-bold'>Total</p>
              </div>
        </div>
    </div>
  )
}
