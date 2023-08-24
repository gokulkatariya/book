import React from 'react'
export default function About(props) {
  console.log("props", props)
  return (
    <div>
      <div className="my-5">
        <div class="card-round">
          <img src={props.image} class="card-img-top" style={{borderRadius:"80rem",width:"13rem"}} alt="..." height="200"/>
          <div class="card-body mx-4 my-2">
            <h5 class="card-title">{props.name} Saini</h5>
            <p class="card-text">{props.text}, Bookstore </p>
          </div>
        </div>
      </div>
    </div >
  )
}
