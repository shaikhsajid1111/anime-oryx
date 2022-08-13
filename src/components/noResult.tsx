import React from "react";

export default function EndOfPage() {
  return (
    <>
        <br/> <br/>
      <div className="container-fluid d-flex flex-wrap justify-content-center">
        <figure className='figure'>
          <img
            src={require('../images/void.svg').default}
            className='figure-img img-fluid'
            alt='End'
          />
          <h1 className='text-center'>Nothing to Show</h1>
        </figure>
      </div>
    </>
  )
}