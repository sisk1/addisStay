import Button from "./Button";
import Heading from "./Heading";

function ConfirmDelete({
  id,
  imageName,
  onCloseModal,
  deleteFun,
  disabled,
  resourceName,
}) {
  function handleDelete() {
    if (imageName) deleteFun({ accomId: id, imageName });
    else deleteFun(id);
  }

  return (
    <div className="flex flex-col gap-5">
      <Heading as="h3">Delete Accom</Heading>
      <p className="leading-loose">
        Are you sure do you want to delete this {resourceName} <br />{" "}
        permanently? This action cannot be undone
      </p>

      <div className="space-x-4 self-end">
        <Button
          variation="secondary"
          onClick={() => onCloseModal?.()}
          disabled={disabled}
        >
          Cancel
        </Button>
        <Button variation="danger" onClick={handleDelete} disabled={disabled}>
          Confirm Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
