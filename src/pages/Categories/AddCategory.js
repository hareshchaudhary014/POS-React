import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddCategory() {
  const navigate = useNavigate();
  const notify = () => toast.success("Category added successfully");
  const notifyError = (msg) => toast.error(`${msg}`);
  const [unauthorized, setUnauthorized] = useState(false);
  const {
    register,
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [renderApp, setRenderApp] = useState(true);
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/categories",
        {
          category: data.category,
        },
        { withCredentials: true },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        notify();
        setTimeout(() => {
          navigate("/categories");
        }, 2000);
      }
    } catch (err) {
      {
        err.response.status === 400 &&
          notifyError(err?.response?.data?.message);
      }
      console.log(err?.response?.data?.type);
      if (err?.response?.data?.type === "duplicate") {
        setError("category", {
          type: "custom",
          message: "This title already exists",
        });
      }
      {
        err?.response?.status === 401 &&
          notifyError("You aren't authorized for this action");
      }
      console.log(err);
    }
  };
  return (
    <div className="bg-background min-h-screen p-2">
      {renderApp && (
        <>
          <ToastContainer className={"text-sm text-grey"} />
          <div className="breadcrum-container flex items-center mt-1 text-xs font-thin text-grey">
            <div className="first flex items-center">
              <span class="material-symbols-outlined text-sm">home</span>
              <span className="">Home</span>
            </div>
            <div className="divider mx-2">/</div>
            <div className="second">Categories</div>
            <div className="divider mx-2">/</div>
            <div className="second">Add Category</div>
          </div>
          <div className="text-left font-bold text-2xl text-slate-700 ml-3">
            Add Category
          </div>
          <div className="flex px-2">
            <Link to="/categories">
              <span class="material-symbols-outlined text-2xl mr-2">west</span>
            </Link>
          </div>
          <div className="card mt-5 p-8 border text-left ">
            <form onSubmit={handleSubmit(onSubmit)} action="">
              <div className="">
                <div className="">
                  <div className="flex flex-col mb-5">
                    <label className="text-md font-thin" htmlFor="">
                      Category Title
                    </label>
                    <input
                      {...register("category", {
                        required: true,
                      })}
                      className={
                        errors?.category
                          ? "text-xs border p-3 rounded-lg mt-3 border-red-600 bg-red-50"
                          : " border-2 p-3 rounded-lg mt-3"
                      }
                      placeholder="Type name here"
                      type="text"
                    />
                    {errors?.category?.type === "required" && (
                      <p className="text-red-600 font-main text-sm mt-1">
                        This field is required
                      </p>
                    )}
                    {errors?.category?.type === "custom" && (
                      <p className="text-red-600 font-main text-sm mt-1">
                        {errors?.category?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="container text-end mt-7 flex items-center">
                  <button className="bg-slate-400 ml-auto text-white py-2 px-5 text-md font-bold flex items-center font-main rounded-lg">
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
          
        </>
      )}
    </div>
  );
}

export default AddCategory;
