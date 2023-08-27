import React from 'react'

export default function Contactus() {
  return (
    <div className="row">
      <div className="col-md-4" style={{ width: "40rem" }}>
        <div className=" mb-3">
          <label forhtml="exampleFormControlInput1" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" />
          <label forhtml="exampleFormControlInput2" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleFormControlInput2" />
          <label forhtml="exampleFormControlInput3" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleFormControlInput3" />
        </div>
        <div className="mb-3">
          <label forhtml="exampleFormControlTextarea1" className="form-label">Description</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-4">Submit</button>
      </div>
      <div className="col-md-6" style={{ marginTop: "24px", textAlign: "right" }}>
        <div className="support">
          <h3>Follow Us</h3>
  
        </div>
      </div>
    </div>
  )
}
