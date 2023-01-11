import React from "react";
import { Link, useLocation } from "react-router-dom";

function AddCategory() {
  return (
    <div className="bg-background min-h-screen p-2">
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

      <div className="card mt-5 p-8 border font-thin text-left ">
        <form 
        // onSubmit={handleSubmit(onSubmit)} 
        action="">
          {/* <div className='grid grid-cols-2'> */}
          <div className="">
            <div className="flex flex-col mb-5">
              <label className="text-md" htmlFor="">
                Category Title
              </label>
              <input
                // {...register("degree_title", {
                //   required: true,
                // })}
                className=
                // {
                //   errors?.degree_title
                //     ? "text-xs border p-3 rounded-lg mt-3 border-red-600 bg-red-50"
                //     : 
                    " border-2 p-3 rounded-lg mt-3"
                // }
                placeholder="Type name here"
                type="text"
              />
              {/* {errors?.degree_title?.type === "required" && (
                <p className="text-red-600 font-main text-sm mt-1">
                  This field is required
                </p>
              )}
              {errors?.degree_title?.type === "custom" && (
                <p className="text-red-600 font-main text-sm mt-1">
                  {errors?.degree_title?.message}
                </p>
              )} */}
            </div>
          </div>
          <div className="container text-end mt-7 flex items-center">
            <button className="bg-slate-400 ml-auto text-white py-2 px-5 text-md font-bold flex items-center font-main rounded-lg">
              Add
            </button>
    
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCategory;
