import React, { useMemo } from "react";
import dateFormat from "dateformat";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { Link, useNavigate } from "react-router-dom";
import { GlobalFilter } from "./GlobalFilter";

export const StockTable = (props) => {
  const COLUMNS = [
    // {
    //     name: '#',
  
    // },
    
    {
      Header: "Name",
      accessor: "p_name",
    },
    {
      Header: "Quantity",
      accessor: "quantity",
 
    },
    {
      Header: "Marked Price",
      accessor: "mp",
    },
    {
        Header: "Single Unit",
        accessor: "single_unit",
      },
      {
        Header: "Selling Price",
        accessor: "sp",
   
      },
      {
        Header: "Category",
        accessor: "categori",
      },
      {
        Header: "Brand",
        accessor: "brand",
      },
      {
        Header: "Vendor",
        accessor: "vendor",
      },
      {
        Header: "Added Date",
        accessor: "created_at",
        Cell: ({ value }) => {
            return (
                <div className="">{dateFormat(value, "mmmm d, yyyy")}</div>
            )
        }

      },
    {
      Header: "Action",
      accessor: "action",
      Cell: (row) => {
        return (
          <div className="relative">
            <Link
              to={`edit-university/${row.row.original.value}`}
              onClick={(e) => {
                props.handleEdit(row.row.original);
              }}
              className="material-symbols-outlined bg-gray-100 p-1 rounded-md cursor-pointer text-base text-grey"
            >
              edit
            </Link>
            <span
              onClick={(e) => {
                props.handleDelete(row.row.original.value);
              }}
              className="material-symbols-outlined bg-red-400 p-1 rounded-md cursor-pointer text-base text-white ml-3"
            >
              delete
            </span>
          </div>
        );
      },
    },
  ];
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => props.data, [props.data]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    page,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;
  const navigate = useNavigate();
  return (
    <>
      <div className="filter-table-container font-main text-xs mt-3 flex items-stretch">
        <div className="w-2/12">
          {/* <Select options={options} placeholder={"All Category"} /> */}
        </div>
        <div className="ml-auto h-full">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
      </div>
      <table
        className="mt-8 rounded-lg font-main font-extrabold p-5 w-full text-xs"
        id="product"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              className="border-b border-gray-300"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th
                  className="text-center p-5 text-grey"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i class="bi bi-caret-down-fill"></i>
                      ) : (
                        <i class="bi bi-caret-up-fill"></i>
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                className="border-b border-gray-300 h-8 overflow-hidden cursor-pointer hover:bg-slate-50"
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => {
                  return (
                    <>
                      <td
                        className="text-center p-5 h-full max-w-xs overflow-hidden"
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    </>
                  );
                })}
              </tr>
            );
          })}
          <div id="edit-container" className=" hidden bg-white p-10 shadow-lg">
            Edit
          </div>
        </tbody>
      </table>
      <div className=" mt-10 font-main text-grey text-xs flex items-center">
        <span className="text-grey">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span className="ml-5">
          | <span className="ml-3">Go to page: </span>
          <input
            className="border border-gray-400 w-full h-full p-3 rounded-md"
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>
        {/* <select value={pageSize} onChange={e => { setPageSize(e.target.value) }}>
                    {
                        [10, 25, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>Show {pageSize}</option>
                        ))
                    }
                </select> */}
        <div className="ml-auto text-xs">
          <button
            className={
              canPreviousPage
                ? "bg-primary p-3 mr-2 rounded-lg text-white"
                : "bg-primary_disabled p-3 mr-2 rounded-lg text-white"
            }
            onClick={() => {
              gotoPage(0);
            }}
            disabled={!canPreviousPage}
          >
            {"<<"}
          </button>
          <button
            className={
              canPreviousPage
                ? "bg-primary p-3 mr-2 rounded-lg text-white"
                : "bg-primary_disabled p-3 mr-2 rounded-lg text-white"
            }
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </button>
          <button
            className={
              canNextPage
                ? "bg-primary p-3 mr-2 rounded-lg text-white"
                : "bg-primary_disabled p-3 mr-2 rounded-lg text-white"
            }
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>
          <button
            className={
              canNextPage
                ? "bg-primary p-3 mr-2 rounded-lg text-white"
                : "bg-primary_disabled p-3 mr-2 rounded-lg text-white"
            }
            onClick={() => {
              gotoPage(pageCount - 1);
            }}
            disabled={!canNextPage}
          >
            {">>"}
          </button>
        </div>
      </div>
    </>
  );
};
