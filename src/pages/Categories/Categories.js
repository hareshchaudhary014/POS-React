/* eslint-disable eqeqeq */
/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import NoRole from "../../Components/NoRole/NoRole";
function Categories() {
  const location = useLocation();
  const [allCategories, setaAllCategories] = useState([]);
  // const [unauthorized, setUnauthorized] = useState(false);
  const [renderApp, setRenderApp] = useState(false);
  const loadData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/categories", {
        withCredentials: true,
      });
      response?.status === 200 && setaAllCategories(response?.data?.data);
      setRenderApp(true);
      console.log(response?.data);
      // setUnauthorized(false);
    } catch (err) {
      // {
      //   err?.response?.status === 401
      //     ? setUnauthorized(true)
      //     : setUnauthorized(false);
      // }
      console.log(err);
    }
  };
  useEffect(() => {
    loadData();
    console.log("rerender");
  }, [location]);

  function togglerCheck(status) {
    console.log(status);
    let t = document.getElementsByClassName("toggler");
    if (status == 1) {
      t.setAttribute("checked", true);
    } else {
      t.setAttribute("checked", false);
    }
  }
  const notify = () => {
    toast.success("Degree deleted successfully");
    loadData();
  };
  const notify2 = () => {
    toast.success("Status changed successfully");
    loadData();
  };
  const notifyError = (msg) => toast.error(`${msg}`);
  const handleDelete = async (data) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/categories/${data}`,
        { withCredentials: true }
      );
      {
        response.status === 200 && notify();
      }
    } catch (err) {
      console.log(err?.response?.status);
      // {
      //   err?.response?.status === 401
      //     ? setUnauthorized(true)
      //     : setUnauthorized(false);
      // }
      notifyError("Unable to delete this degree. \n[This degree is in use.]");
    }
  };

  const handleStatusChange = async (e) => {
    const slug = e.target.id;
    const val = e.target.value == 1 ? 0 : 1;

    try {
      const response = await axios.put(
        `http://localhost:8000/api/category/status/${slug}`,
        {
          status: val,
        },
        { withCredentials: true }
      );
      {
        response.status === 200 && notify2();
      }
    } catch (err) {
      console.log(err?.response?.status);
      // {
      //   err?.response?.status === 401
      //     ? setUnauthorized(true)
      //     : setUnauthorized(false);
      // }
      notifyError("Failed to change the status.");
    }
  };
  return (
    <div className="bg-background min-h-screen p-2">
      <ToastContainer className={"text-sm text-grey"} />

      <div className="breadcrum-container flex items-center text-xs pl-2 font-thin text-slate-700">
        <div className="first flex items-center">
          <span class="material-symbols-outlined text-sm">home</span>
          <span className="">Home</span>
        </div>
        <div className="divider mx-2">/</div>
        <div className="second">Categories</div>
      </div>

      <div className="flex justify-between">
        <div className="text-left font-bold text-2xl text-slate-500 ml-3">
          Categories
        </div>
        <Link
          to="/categories/add-category"
          className="bg-slate-500 text-white p-3 mr-2 text-md flex items-center font-main rounded-lg"
        >
          <span class="material-symbols-outlined text-sm mr-1">add</span>
          <span>Add Category</span>
        </Link>
      </div>

      {renderApp && (
        <div class="p-2">
          <div class="card col-span-2 ">
            <table class="table-auto w-full text-center">
              <thead className="bg-slate-200">
                <tr>
                  <th class="px-4 py-2 border-r">SN</th>
                  <th class="px-4 py-2 border-r">Category</th>
                  <th class="px-4 py-2 border-r">Status</th>
                  <th class="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody class="text-gray-600">
                {allCategories.map((categories, index) => {
                  return (
                    // togglerCheck(categories.status),

                    <tr>
                      <td class="border border-l-0 px-4 py-2 text-center text-green-500">
                        <i class="fad fa-circle"></i>
                        {index + 1}
                      </td>
                      <td class="border border-l-0 px-4 py-2">
                        {categories.title}
                      </td>
                      <td class="border border-l-0 px-4 py-2">
                        <label class="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value={categories.status}
                            id={categories.slug}
                            class="sr-only peer toggler"
                            checked={categories.status ? true : false}
                            onChange={(e) => handleStatusChange(e)}
                          />
                          <div
                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                      rounded-full peer 
                        dark:bg-gray-700 peer-checked:after:translate-x-full 
                        peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                        after:left-[2px] after:bg-white after:border-gray-300 after:border 
                        after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600
                         peer-checked:bg-blue-600"
                          ></div>
                        </label>
                      </td>
                      <td class="border border-l-0 border-r-0 px-4 py-2">
                        <span class="flex justify-center">
                          <span class="material-symbols-outlined text-xl mx-1 text-white p-1 bg-gray-400 rounded-md cursor-pointer">
                            edit
                          </span>
                          <span class="material-symbols-outlined text-xl mx-1 text-white p-1 bg-red-400 rounded-md cursor-pointer">
                            delete
                          </span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Categories;
