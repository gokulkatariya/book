import React from 'react'
import FollowUs from './FollowUs';
export default function Contactus() {
  function handleregister() {
    let Name = document.getElementById("Name").value;
    let Email = document.getElementById("Email").value;
    let Textarea = document.getElementById("Textarea").value;
    if (Name !== "" && Email !== "" && Textarea !== ""){
      console.log(Name, Email, Textarea);
     
      fetch("http://13.127.50.136:8002/sign_up/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          Name: Name,
          Email: Email,
          Textarea: Textarea,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
          }
          else {
          }
        })
    }
  }
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <div className="row">
      <div className="col-md-4" style={{ width: "40rem" }}>
        <div className=" mb-3">
          <label forhtml="exampleFormControlInput1" className="form-label">Name</label>
          <input type="text" className="form-control" id="Name" />
          <label forhtml="exampleFormControlInput2" className="form-label">Email</label>
          <input type="email" className="form-control" id="Email" />
        </div>
        <div className="mb-3">
          <label forhtml="exampleFormControlTextarea1" className="form-label">Description</label>
          <textarea className="form-control" id="Textarea" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-4" onClick={handleregister}>Submit</button>
      </div>
      <div className="col-md-6" style={{ marginTop: "24px", textAlign: "right" }}>
        <div className="support">
          <FollowUs />
        </div>
      </div>
    </div>
  )
}
