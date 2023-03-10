import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { Table } from "./UniversityTable";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Unauthorized from "../../Components/Errors/Unauthorized";
import { StockTable } from "./StockTable";
function ViewStock() {
  const location = useLocation();
  const [allStocks, setAllStocks] = useState([]);
  const [unauthorized, setUnauthorized] = useState(false);
  const [renderApp, setRenderApp] = useState(false);
  const loadData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/stocks",
        { withCredentials: true }
      );
      response?.status === 200 && setAllStocks(response?.data?.data);
      setRenderApp(true);
      setUnauthorized(false);
    } catch (err) {
      {
        err?.response?.status === 401
          ? setUnauthorized(true)
          : setUnauthorized(false);
      }
      console.log(err);
    }
  };
  useEffect(() => {
    loadData();
    console.log("rerender");
  }, [location]);

  const notify = () => {
    toast.success("University deleted successfully");
    loadData();
  };
  const notifyError = (msg) => toast.error(`${msg}`);
  const handleDelete = async (data) => {
    const confirmationm = window.confirm("Are you sure to delete University?");
    if (confirmationm) {
      try {
        const response = await axios.delete(
          `http://localhost:8000/api/universities/${data}`,
          { withCredentials: true }
        );
        {
          response.status === 200 && notify();
        }
      } catch (err) {
        notifyError("Unable to delete University.");
      }
    }
  };
  return (
    <>
      {unauthorized ? (
        <Unauthorized />
      ) : (
        <div className="bg-background min-h-screen p-2">
          <ToastContainer className={"text-sm text-grey"} />

          <div className="breadcrum-container flex items-center text-xs pl-2 font-thin text-slate-700">
            <div className="first flex items-center">
              <span class="material-symbols-outlined text-sm">home</span>
              <span className="">Home</span>
            </div>
            <div className="divider mx-2">/</div>
            <div className="second">Stocks</div>
          </div>

          <div className="flex justify-between">
            <div className="text-left font-bold text-2xl text-slate-500 ml-3">
              Stocks
            </div>
            <Link
              to="/add-stock"
              className="bg-slate-400 text-white p-2 mr-2 text-sm flex items-center font-main rounded-lg"
            >
              <span class="material-symbols-outlined text-sm mr-1">add</span>
              <span>Add Stock</span>
            </Link>
          </div>

          <div class="p-2">
          {renderApp && <StockTable handleDelete={handleDelete} data={allStocks} />}

            {/* <div class="card col-span-2 ">
              <table class="table-auto w-full text-center">
                <thead className="bg-slate-200">
                  <tr>
                    <th className="border p-1">#</th>
                    <th className="border p-1">Product Name</th>
                    <th className="border p-1">Quantity</th>
                    <th className="border p-1">Marked Price</th>
                    <th className="border p-1">Single Unit</th>
                    <th className="border p-1">SP of unit</th>
                    <th className="border p-1">Category</th>
                    <th className="border p-1">Brand</th>
                    <th className="border p-1">Vendor</th>
                    <th className="border p-1">Action</th>
                  </tr>
                </thead>
                <tbody class="text-gray-600">
                  <tr>
                    <td class="border border-l-0 px-4 py-2 text-center text-green-500">
                      <i class="fad fa-circle"></i>
                    </td>
                    <td class="border border-l-0 px-4 py-2">
                      Lightning to USB-C Adapter Lightning.
                    </td>
                    <td class="border border-l-0 px-4 py-2">
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </td>
                    <td class="border border-l-0 border-r-0 px-4 py-2">
                      <span class="num-2"></span> minutes ago
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-l-0 px-4 py-2 text-center text-yellow-500">
                      <i class="fad fa-circle"></i>
                    </td>
                    <td class="border border-l-0 px-4 py-2">Apple iPhone 8.</td>
                    <td class="border border-l-0 px-4 py-2">
                      $<span class="num-2"></span>
                    </td>
                    <td class="border border-l-0 border-r-0 px-4 py-2">
                      <span class="num-2"></span> minutes ago
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-l-0 px-4 py-2 text-center text-green-500">
                      <i class="fad fa-circle"></i>
                    </td>
                    <td class="border border-l-0 px-4 py-2">
                      Apple MacBook Pro.
                    </td>
                    <td class="border border-l-0 px-4 py-2">
                      $<span class="num-2"></span>
                    </td>
                    <td class="border border-l-0 border-r-0 px-4 py-2">
                      <span class="num-2"></span> minutes ago
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-l-0 px-4 py-2 text-center text-red-500">
                      <i class="fad fa-circle"></i>
                    </td>
                    <td class="border border-l-0 px-4 py-2">
                      Samsung Galaxy S9.
                    </td>
                    <td class="border border-l-0 px-4 py-2">
                      $<span class="num-2"></span>
                    </td>
                    <td class="border border-l-0 border-r-0 px-4 py-2">
                      <span class="num-2"></span> minutes ago
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-l-0 px-4 py-2 text-center text-yellow-500">
                      <i class="fad fa-circle"></i>
                    </td>
                    <td class="border border-l-0 px-4 py-2">
                      Samsung Galaxy S8 256GB.
                    </td>
                    <td class="border border-l-0 px-4 py-2">
                      $<span class="num-2"></span>
                    </td>
                    <td class="border border-l-0 border-r-0 px-4 py-2">
                      <span class="num-2"></span> minutes ago
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-l-0 border-b-0 px-4 py-2 text-center text-green-500">
                      <i class="fad fa-circle"></i>
                    </td>
                    <td class="border border-l-0 border-b-0 px-4 py-2">
                      apple watch.
                    </td>
                    <td class="border border-l-0 border-b-0 px-4 py-2">
                      $<span class="num-2"></span>
                    </td>
                    <td class="border border-l-0 border-b-0 border-r-0 px-4 py-2">
                      <span class="num-2"></span> minutes ago
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}

export default ViewStock;
