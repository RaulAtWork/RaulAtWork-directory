import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";

// Define your table component
function ProjectsTable({ data }) {
  const columns = useMemo(
    () => [
      {
        Header: "Project",
        accessor: "name",
      },
      {
        Header: "Soruce",
        accessor: "source",
      },
      {
        Header: "Link",
        accessor: "link",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Comment",
        accessor: "comment",
      },
      {
        Header: "Techs",
        accessor: "techs",
      },
    ],
    []
  );

  // Use the useTable hook to create your table instance
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  // Render your table

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(
              (column) =>
                (
                  <th key={column.id} {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
<span>
                 {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
              </span>
                  </th>
                )
            )}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);

          return (
            <tr key={row.id} {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td key={cell.column.id} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ProjectsTable;
