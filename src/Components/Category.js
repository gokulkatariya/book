import React  from 'react'
import gita from './Images/gita.jpg';

export default function Category() {
  return (
    <div className="my-5">
      <div className="card" style={{width: '18rem,'}}>
  <img src={gita} className="card-img-top" alt="..." height="250"/>
  <div className="card-body">
    <h5 className="card-title">Bhagvat Gita Book</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">$10.00</a>
  </div>
</div>
    </div>
  )
}
