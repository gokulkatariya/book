import React from 'react'
export default function About(props) {
  console.log("props", props)
  return (
    <div>
      <div className="my-5">
        <div className="card-round">
          <img src={props.image} className="card-img-top" style={{borderRadius:"80rem",width:"13rem"}} alt="..." height="200"/>
          <div className="card-body mx-4 my-2">
            <h5 className="card-title">{props.name} Sainifff</h5>
            <p className="card-text">{props.text}, Bookstore </p>
          </div>
        </div>
      </div>
    </div >
  )
}
