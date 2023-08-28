import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        LOGIN
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
            <Form.Group className="mb-3" controlId="inputemail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter email"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputpassword">
<<<<<<< HEAD
              <Form.Label>Password</Form.Label>
=======
              <Form.Label>PASSWORD</Form.Label>
>>>>>>> 6c6b0c3ffbc7b8c76ebc6eb4360bd09489d37ef4
              <Form.Control
                type="password"
                placeholder="enter password"
                autoFocus
              />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleClose}>
            SUBMIT
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;