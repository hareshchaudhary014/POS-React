import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
// import NoRole from "../../Components/NoRole/NoRole";
import { useAuth } from "../../Components/Auth/auth";

function AddStock() {
  const navigate = useNavigate();
  const notify = () => toast.success("University added successfully");
  const notifyError = (msg) => toast.error(`${msg}`);
  const [brand, setBrands] = useState();
  const [categories, setCategories] = useState();
  const auth = useAuth();
  
  const [stocks, ssetStocks] = useState([
    {
      p_name: "",
      quantity: "",
      mp: "",
      single_unit: "",
      sp: "",
      category: "",
      brand: "",
      vendor: ""
    },
  ]);

  const addStocks = (e) => {
    e.preventDefault();
    const newField = {
      p_name: "",
      quantity: "",
      mp: "",
      single_unit: "",
      sp: "",
      category: "",
      brand: "",
      vendor:""
    };
    ssetStocks([...stocks, newField]);
  };

  const {
    register,
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [renderApp, setRenderApp] = useState(false);

  // useEffect(() => {
  //     const img = new Image();
  //     img.src = uniLogo;
  //     img.onload = () => {
  //         if (img.width > 912 && img.height > 500) {
  //             setUniLogo('');
  //             setError('page_cover_holder', {
  //                 type: "custom",
  //                 message: "Cover image size cannot be greater than 912px * 500px",
  //             })
  //         }
  //     }
  // }, [uniLogo])
  const handleClick = (id) => {
    document.getElementById(id).click();
  };

  const checkCourseLength = () => {
    if (stocks.length < 1) {
      notifyError("University need atleast 1 course");
      return false;
    } else {
      return true;
    }
  };

  const onSubmit = async (data) => {
    if (checkCourseLength()) {
      try {
        if (stocks.find((co) => co.name == "")) {
          notifyError("sTOCK cannot be empty");
        } else {
          const formData = new FormData();
          // formData.append("name", data.university_name);
          // formData.append("phone", data.univ_contact);
          // formData.append("email", data.contact_email);
          // formData.append("uni_link", data.uni_link);
          // formData.append("uni_logo_text", data.uni_logo_text);
          // formData.append("uni_img_text", data.uni_img_text);
          // formData.append("description", editorText);
          // formData.append("blog_cover", updatedUniLogo);
          // formData.append("cover", updatedUniImage);
          // formData.append("location", JSON.stringify(location));
          formData.append("stocks", JSON.stringify(stocks));
          console.log(formData.values);
          const response = await axios.post(
            "http://localhost:8000/api/stocks",
            formData,
            { withCredentials: true },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log(response);
          if (response.status === 200) {
            notify();
            setTimeout(() => {
              navigate("/stocks");
            }, 2000);
          }
        }
      } catch (err) {
        {
          err.response.status === 400 &&
            notifyError(err?.response?.data?.message);
        }
        console.log(err?.response?.data?.type);
        if (err?.response?.data?.type === "Duplicate ID") {
          setError("product_id", {
            type: "custom",
            message: "This product ID is already in use",
          });
        }
        if (err?.response?.data?.type === "Duplicate name") {
          setError("product_name", {
            type: "custom",
            message: "This product name is already in use",
          });
        }
        {
          err?.response?.status === 401 &&
            notifyError("You aren't authorized for this action");
        }
        console.log(err);
      }
    }
  };

  const loadData = async () => {
    try {
      const response = await Promise.all([
        axios.get(`${auth.baseURL}/api/brands`,{withCredentials:true}),
        axios.get(`${auth.baseURL}/api/categories`,{withCredentials:true})
    ])
      setBrands(response[0]?.data?.data);
      console.log(response[0].data.data);
      setCategories(response[1].data.data);
      setRenderApp(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("here i am");
    loadData();
    console.log(stocks);
  }, [stocks]);

  return (
    <div className="bg-background min-h-screen p-2">
      {/* {renderApp && ( */}
      <>
        {/* <ToastContainer className={"text-sm text-grey"} /> */}
        <div className="breadcrum-container flex items-center mt-1 text-xs font-thin text-grey">
          <div className="first flex items-center">
            <span class="material-symbols-outlined text-sm">home</span>
            <span className="">Home</span>
          </div>
          <div className="divider mx-2">/</div>
          <div className="second">Stocks</div>
          <div className="divider mx-2">/</div>
          <div className="second">Add Stock</div>
        </div>
        <div className="text-left font-bold text-2xl text-slate-700 ml-3">
          Add Stock
        </div>
        <div className="flex px-2">
          <Link to="/stocks">
            {/* <span class="material-symbols-outlined text-2xl mr-2">west</span> */}
            <span class=" text-md my-auto text-purple-700">{`<-- Stock List`}</span>
          </Link>
        </div>

        <div className=" mx-2 p-2 rounded-md border font-thin ">
          <form onSubmit={handleSubmit(onSubmit)} action="">
            {/* <div className='grid grid-cols-2'> */}

            <div className="">
              <div className="flex justify-between">
                <label className="text-lg" htmlFor="">
                Product Details
                </label>
                
              </div>
              <table className="w-full  mt-2 p-3 text-sm font-main">
                <thead className="bg-slate-500 text-white">
                  <tr>
                    <th className="border p-1">#</th>
                    <th className="border p-1 w-2/12">Product Name</th>
                    <th className="border p-1 ">Quantity</th>
                    <th className="border p-1">Marked Price</th>
                    <th className="border p-1">Single Unit</th>
                    <th className="border p-1">SP of unit</th>
                    <th className="border p-1 w-2/12">Category</th>
                    <th className="border p-1 w-2/12">Brand</th>
                    <th className="border p-1 w-2/12">Vendor</th>
                    <th className="border p-1">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {stocks.map((item, index) => (
                    <tr key={index}>
                      <td className="border p-1 text-center">{index + 1}</td>

                      <td className="border p-1 text-center">
                        <input
                          className={"text-xs border p-3 rounded-lg w-full"}
                          placeholder="Type product name here"
                          value={item.name}
                          onChange={(e) => {
                            let data = [...stocks];
                            data[index][`name`] = e.target.value;
                            ssetStocks(data);
                          }}
                          type="text"
                        />
                      </td>

                      <td className="border p-1 text-center">
                        <input
                          className={"text-xs border p-3 rounded-lg w-full"}
                          placeholder="Quantity"
                          value={item.quantity}
                          onChange={(e) => {
                            let data = [...stocks];
                            data[index][`quantity`] = e.target.value;
                            ssetStocks(data);
                          }}
                          type="number"
                          required
                        />
                      </td>
                      <td className="border p-1 text-center">
                        <input
                          className={"text-xs border p-3 rounded-lg w-full"}
                          placeholder="MP"
                          value={item.mp}
                          onChange={(e) => {
                            let data = [...stocks];
                            data[index][`mp`] = e.target.value;
                            ssetStocks(data);
                          }}
                          type="number"
                          required
                        />
                      </td>

                      <td className="border p-1 text-center">
                        <input
                          className={"text-xs border p-3 rounded-lg w-full"}
                          placeholder="Single Unit"
                          value={item.single_unit}
                          onChange={(e) => {
                            let data = [...stocks];
                            data[index][`single_unit`] = e.target.value;
                            ssetStocks(data);
                          }}
                          type="number"
                          required
                        />
                      </td>
                      <td className="border p-1 text-center">
                        <input
                          className={"text-xs border p-3 rounded-lg w-full"}
                          placeholder="Selling price"
                          value={item.sp}
                          onChange={(e) => {
                            let data = [...stocks];
                            data[index][`sp`] = e.target.value;
                            ssetStocks(data);
                          }}
                          type="text"
                        />
                      </td>

                      <td className="border p-1 text-center">
                        <div className="flex items-center w-100">
                          <Select
                            name="category"
                            value={item.id}
                            getOptionLabel={(option) => `${option.title}`}
                            onChange={(value) => {
                              let data = [...stocks];
                              data[index][`category`] = value.id;
                              ssetStocks(data);
                            }}
                            className="w-full tex-xs"
                            placeholder={"Category"}
                            options={categories}
                          />
                        </div>
                      </td>

                      <td className="border p-2 text-center">
                        <div className="flex items-center w-100">
                          <Select
                            name="brand"
                            value={item.id}
                            getOptionLabel={(option) => `${option.title}`}
                            onChange={(value) => {
                              let data = [...stocks];
                              data[index][`brand`] = value.id;
                              ssetStocks(data);
                            }}
                            className="w-full tex-xs"
                            placeholder={"Brand"}
                            options={brand}
                          />
                        </div>
                      </td>


                      <td className="border p-2 text-center">
                        <input
                          className={"text-xs border p-3 rounded-lg w-full"}
                          placeholder="Type Vendor here"
                          value={item.vendor}
                          onChange={(e) => {
                            let data = [...stocks];
                            data[index][`vendor`] = e.target.value;
                            ssetStocks(data);
                          }}
                          type="text"
                        />
                      </td>
                      <td className="border p-2 text-center">
                        <div className="relative">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              ssetStocks(
                                stocks.filter((x, i) => i !== index)
                              );
                            }}
                            className="material-symbols-outlined cursor-pointer text-xl text-red-500"
                          >
                            close
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end">
                  <span
                    onClick={(event) => {
                      addStocks(event);
                    }}
                    className=" ml-auto text-primary py-2 px-5 text-md font-bold underline decoration-2 cursor-pointer"
                  >
                    Add More
                  </span>
                </div>
            </div>
            <div className="container ">
              <button className="bg-slate-600 mr-auto text-white py-2 px-10 text-md font-bold flex items-center font-main rounded-md">
                Save All
              </button>
 
            </div>
          </form>
        </div>
      </>
      {/* )} */}
    </div>
  );
}

export default AddStock;
