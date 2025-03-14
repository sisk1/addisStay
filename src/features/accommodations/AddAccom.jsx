import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateAccomForm from "./CreateAccomForm";

function AddAccom() {
  return (
    <>
      <Modal>
        <Modal.Open opens="accom-form">
          <Button>Add new accom</Button>
        </Modal.Open>

        <Modal.Window name="accom-form">
          <CreateAccomForm />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default AddAccom;
