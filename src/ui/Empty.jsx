function Empty({ resourceName, colCount }) {
  // When used inside a table (colCount is provided)
  if (colCount) {
    return (
      <tbody>
        <tr>
          <td
            className="p-4 text-lg font-medium text-red-400"
            colSpan={colCount}
          >
            <span className="flex items-center justify-center">
              No data could be found 🧐
            </span>
          </td>
        </tr>
      </tbody>
    );
  }

  // When not inside a table (no colCount provided)
  return (
    <div className="flex items-center justify-center rounded-md bg-red-100 p-4 text-xl font-medium text-red-500">
      No {resourceName} could be found 🧐
    </div>
  );
}

export default Empty;
