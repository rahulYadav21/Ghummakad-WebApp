import React from 'react';
import './review.css';
import {
  MDBContainer,
  MDBTypography
} from 'mdb-react-ui-kit';
import reviewdata from './reviewData';

export default function Review() {
  // const time = new Date();

  return (
  <>
  <MDBContainer>
    <MDBTypography className='display-4 text-center p-3'>
      Customer Review
    </MDBTypography>
    {/* <div className='datetime'>
      <p>{time.toLocaleString() }</p>
    </div> */}
    {reviewdata.map((review)=>(
      <div className="cards" key={review.id}>
      <p className='m-2' blockquote>
        {review.reviewText}
      </p>
      <h5 className='m-2 text-secondary'>
        {review.reviewerName}
      </h5>
      <blockquote className=''>
        <span className='m-2 text-danger'>"{review.reting}"</span>
      </blockquote>
      <footer className='text-end me-5'>
        <span className=''>{review.Date}</span>
      </footer>
    </div>
    ))}
    </MDBContainer>
    </>
  );
}