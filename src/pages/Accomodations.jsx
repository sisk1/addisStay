import AccomsTable from "../features/accommodations/AccomsTable";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import AddAccom from "../features/accommodations/AddAccom";
import AccomTableOperations from "../features/accommodations/AccomTableOperations";

function Accomodations() {
  return (
    <>
      <Row type="horizontal">
        <Heading>All Accommodations</Heading>
        <AccomTableOperations />
      </Row>

      <Row>
        <AccomsTable />
        <AddAccom />
      </Row>
    </>
  );
}

export default Accomodations;
