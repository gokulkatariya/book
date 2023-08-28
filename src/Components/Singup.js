import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Signup() {
  function handleregister() {
    // alert("success");
    var User_Name = document.getElementById("username").value;
    var Email = document.getElementById("email").value;
    // var password = document.getElementById('password').value;
    var Contect_No = document.getElementById("contact").value;
    var address = document.getElementById("address").value;
    // var conformpassword = document.getElementById('conformpasswordInput').value;
    if (User_Name !== "" && Email !== "" && Contect_No !== "" && address !== ""){
      console.log(User_Name, Email, Contect_No);
     
      fetch("http://13.127.50.136:8002/sign_up/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          User_Name: User_Name,
          Email: Email,
          // password: password,
          Contect_No: Contect_No,
          address: address,
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary my-5" onClick={handleShow}>
        REGISTRATION
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>REGISTRATION HERE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>USER NAME</Form.Label>
              <Form.Control
                type="user name"
                placeholder=" enter username"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="enter email" autoFocus />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="password">
              <Form.Label>PASSWORD</Form.Label>
              <Form.Control
                type="password"
                placeholder="enter password"
                autoFocus
              />
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="contact">
              <Form.Label>CONTACT</Form.Label>
              <Form.Control
                type="mobile number"
                placeholder="enter contact number"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>ADDERESS</Form.Label>
              <Form.Control
                type="address"
                placeholder="enter address"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleregister}>
            submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Signup;