import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Signup() {
  function handleregister() {
    let User_Name = document.getElementById("username").value;
    let Email = document.getElementById("email").value;
    let Contect_No = document.getElementById("contact").value;
    let address = document.getElementById("address").value;
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
      <Button letiant="primary" onClick={handleShow}>
        REGISTRATION
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>REGISTRATION </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="user name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contact">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="mobile number"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="address"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button letiant="primary" onClick={handleregister}>
            submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Signup;