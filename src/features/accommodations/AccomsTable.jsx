import { PAGE_SIZE } from "../../utils/constants";

import { useAccommodations } from "./useAccommodations";
import { useSearchParams } from "react-router-dom";

import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import AccomsRow from "./AccomsRow";
import Table from "../../ui/Table";
import Pagination from "../../ui/Pagination";

function AccomsTable() {
  const { accoms, isLoading } = useAccommodations();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  if (accoms?.length === 0) return <Empty resourceName="Accommodation" />;

  // 1. FILTER
  const filterValue = searchParams.get("discount") || "all";

  let filteredAccoms;
  if (filterValue === "all") filteredAccoms = accoms;
  if (filterValue === "no-discount")
    filteredAccoms = accoms?.filter((accom) => accom.discount === 0);
  if (filterValue === "with-discount")
    filteredAccoms = accoms?.filter((accom) => accom.discount > 0);

  // 2. SORTING
  const sortByRaw = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortByRaw.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  const sortedAccoms = filteredAccoms?.sort(
    (a, b) => (a[field] - b[field]) * modifier,
  );

  // 3. PAGINATION
  const currentPage = Number(searchParams.get("page")) || 1;
  const count = sortedAccoms.length;
  const from = (currentPage - 1) * PAGE_SIZE;
  const to = currentPage * PAGE_SIZE - 1;

  const accomsAfterPagination = sortedAccoms.slice(from, to);

  return (
    <Table>
      <Table.Header
        heads={[
          "",
          "Accommodation",
          "Capacity",
          "Type",
          "Price",
          "Discount",
          "Rating",
          "Floor",
          "",
        ]}
      />
      <Table.Body
        data={accomsAfterPagination}
        render={(accoms) => <AccomsRow key={accoms.id} accom={accoms} />}
      />

      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
}

export default AccomsTable;
