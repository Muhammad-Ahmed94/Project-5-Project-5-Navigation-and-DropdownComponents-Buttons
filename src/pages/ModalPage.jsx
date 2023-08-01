import Modal from "../components/Modal";
import { useState } from "react";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };

  const modalButton = (
    <div>
      <Button onClick={onClose} primary rounded>
        Close Modal!
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={onClose} modalButton={modalButton}>
      <p>Hello this is a Modal!!</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Click Me
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
