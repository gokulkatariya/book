import React  from 'react'
import gita from './Images/gita.jpg';

export default function Category() {
  return (
    <div className="my-5">
      <div class="card" style={{width: "18rem;"}}>
  <img src={gita} class="card-img-top" alt="..." height="250"/>
  <div class="card-body">
    <h5 class="card-title">Bhagvat Gita Book</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" class="btn btn-primary">$10.00</a>
  </div>
</div>
    </div>
  )
}