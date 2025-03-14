import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import Empty from "./Empty";

const TableContext = createContext();

function Table({ children }) {
  const [colCount, setColCount] = useState();

  return (
    <TableContext.Provider value={{ colCount, setColCount }}>
      <div className="relative overflow-x-auto border border-gray-200 sm:rounded-lg dark:border-gray-700">
        <table className="w-full text-left text-sm text-gray-700 rtl:text-right dark:text-gray-100">
          {children}
        </table>
      </div>
    </TableContext.Provider>
  );
}

function Header({ heads }) {
  const { setColCount } = useContext(TableContext);

  useEffect(
    function () {
      setColCount(heads.length);
    },
    [setColCount, heads.length],
  );

  return (
    <thead className="border-b border-gray-200 bg-gray-100 text-sm uppercase text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <tr className="whitespace-nowrap">
        {heads.map((header, index) => (
          <th
            key={index}
            scope="col"
            className="px-6 py-5 font-semibold dark:font-medium"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function Body({ data, render }) {
  const { colCount } = useContext(TableContext);

  if (!data?.length) return <Empty colCount={colCount} />;

  return <tbody>{data?.map(render)}</tbody>;
}

function Row({ children, size }) {
  return (
    <tr
      className={`whitespace-nowrap border-b bg-white hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600 ${
        size === "large" ? "text-base" : ""
      }`}
    >
      {children}
    </tr>
  );
}

function Footer({ children }) {
  const { colCount } = useContext(TableContext);

  return <tfoot>{cloneElement(children, { colCount })}</tfoot>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
