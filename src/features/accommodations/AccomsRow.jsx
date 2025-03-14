import {
  HiOutlineDuplicate,
  HiOutlinePencil,
  HiOutlineTrash,
} from "react-icons/hi";

import { formatCurrency } from "../../utils/helpers";
import { useCreateAccommodation } from "./useCreateAccommodation";
import { useDeleteAccommodation } from "./useDeleteAccommodation";

import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import CreateAccomForm from "./CreateAccomForm";
import TableData from "../../ui/TableData";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menu from "../../ui/Menu";

function AccomsRow({ accom }) {
  const { createAccom, isCreating } = useCreateAccommodation();
  const { deleteAccom, isDeleting } = useDeleteAccommodation();
  const {
    id: accomId,
    image,
    name,
    capacity,
    type,
    regularPrice,
    discount,
    rating,
    floorNumber,
  } = accom;
  const imageName = image.split("/").at(-1);

  function handleDuplicate() {
    // eslint-disable-next-line no-unused-vars
    const { id, ...restOfAccom } = accom;

    const newCabin = {
      ...restOfAccom,
      name: `${name}-Copy`,
    };

    createAccom(newCabin);
  }

  return (
    <Modal>
      <Menu>
        <Table.Row>
          <TableData type="image">
            <img
              src={image}
              alt="accommodation"
              className="h-16 w-20 max-w-20 object-cover"
            />
          </TableData>
          <TableData>Room-{name}</TableData>
          <TableData>Fits up to {capacity} guests</TableData>
          <TableData>{type}</TableData>
          <TableData>{formatCurrency(regularPrice)}</TableData>
          <TableData type="greenColor">
            {discount === 0 ? "—" : formatCurrency(discount)}
          </TableData>
          <TableData type="yellowColor">{rating}</TableData>
          <TableData>{floorNumber}</TableData>

          <TableData type="menu">
            <Menu.Toggle id={accomId} />
            <Menu.ButtonGroup id={accomId}>
              <Menu.Button
                Icon={HiOutlineDuplicate}
                name="Duplicate"
                onClick={handleDuplicate}
                disabled={isCreating}
              />

              <Modal.Open opens="edit-accom">
                <Menu.Button Icon={HiOutlinePencil} name="Edit" />
              </Modal.Open>

              <Modal.Open opens="confirm-delete">
                <Menu.Button Icon={HiOutlineTrash} name="Delete" />
              </Modal.Open>
            </Menu.ButtonGroup>
          </TableData>
        </Table.Row>
      </Menu>

      <Modal.Window name="edit-accom">
        <CreateAccomForm accomToEdit={accom} />
      </Modal.Window>

      <Modal.Window name="confirm-delete">
        <ConfirmDelete
          imageName={imageName}
          id={accomId}
          deleteFun={deleteAccom}
          disabled={isDeleting}
          resourceName="Accommodation"
        />
      </Modal.Window>
    </Modal>
  );
}

export default AccomsRow;
