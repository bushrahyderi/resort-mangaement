import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function Popup() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => setShow(true);

  // activities
  const handleContinue = () => {
    setShow(false)
    setShow2(true)
  };

  // const handleContinue2 = () => {
  //   setShow2(false)
  //   setShow3(true)
  // };
  
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow(true);

  // const [show3, setShow3] = useState(false);
  // const handleClose3 = () => setShow3(false);
  // const handleShow3 = () => setShow3(true);

  const [timeAvailable, setTimeAvailable] = useState(0);

  const handleTimeChange = (event) => {
    setTimeAvailable(event.target.value);
  };


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Arrived early??
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Arrived Early?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          No problem we have the activities and games planned for you!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           No Thanks
          </Button>
          <Button variant="primary" onClick={handleContinue}>Try</Button>
          
        </Modal.Footer>
      </Modal>

{/* try */}
      {/* <Button variant="primary" onClick={handleShow2}>
        Launch demo modal
      </Button> */}

      {/* <Modal show={show2} 
      onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Try</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              >
              <Form.Label>Enter the time left</Form.Label>
              <Form.Control
                type="time"
                autoFocus
                />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={handleContinue2}>
            Recommend
            </Button>
            </Modal.Footer>
      </Modal> */}
{/* Activities */}

<Modal show={show2} 
onHide={handleClose2}>
      <Modal.Header closeButton>
        <Modal.Title>Activities</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="timeAvailable">
          <Form.Label>Time Available (hours)</Form.Label>
          <Form.Control type="number" value={timeAvailable} onChange={handleTimeChange} />
        </Form.Group>
        {timeAvailable<0 &&(
          <p>Please select valid time!</p>
        )}
        {timeAvailable==0 &&(
          <p>You are on time!</p>
        )}
        {timeAvailable == 1 && timeAvailable>0 && (
          <p>Rocket Ejector: Blast off into the Sky!!</p>
        )}
        {timeAvailable == 1 && timeAvailable>0 && (
          <p>Key punch at TGE</p>
        )}
        {timeAvailable == 3 &&  (
            <p>Dirt kart </p>
          )}
        {timeAvailable == 1 &&  (
            <p>Key punch at TGE </p>
          )}
        {timeAvailable == 2 && (
            <p>Bubble soccer </p>
          )}
        {timeAvailable == 2 && (
          <p>Pyramid Builder: Climb, Balance and Ascend!!</p>
          )}
        {timeAvailable == 2 &&(
            <p>Archery </p>
          )}
        {timeAvailable == 3 &&  (
          <p>Paintball (Min age: 18): Engage in Tactical Battles!!</p>
        )}
        {timeAvailable == 3 && (
          <p>Kayaking: Paddle Through Serenity!! </p>
        )}
        {timeAvailable >= 4 &&   (
          <p>Human Foosball</p>
        )}
        {timeAvailable >= 4 && (
          <p>Giant Swing</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose2}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  
      
    </>
  );
}
export default Popup;