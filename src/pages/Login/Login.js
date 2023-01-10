import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../Components/Auth/auth";
const Login = () => {
  const navigate = useNavigate();
  // const auth = useAuth();
  const [sucess, setSucess] = useState("");
  // Success message
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    setLoading(true);
    const username = data.username;
    const password = data.password;
    try {
      setErrMsg("");
      setSucess("");
      const response = await axios.post(
        `http://localhost:8000/api/login`,
        {
          username: username,
          password:password,
        },
        { withCredentials: true },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        // auth.setIsLogin(true);
        // setLoading(false);
        // auth.login(response.data.user);
        setSucess(response.data.msg);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    } catch (err) {
      setLoading(false);
      setErrMsg(err?.response?.data?.msg);
      console.log(err);
    }
  };
  return (
    <div className="h-screen font-sans login bg-fit">
      <div class="container mx-auto h-full flex flex-1 justify-center items-center">
        <div class="w-full max-w-lg">
          <div class="leading-loose">
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              class="max-w-xl m-4 p-10 bg-white rounded-xl shadow-xl"
            >
              <p class="text-gray-800 font-medium text-center text-2xl font-bold">
                Login
              </p>
              {}
              {sucess && (
                <p className="mx-5 mt-4 text-sm p-3 flex bg-green-200 border border-green-800 rounded text-green-800">
                  <span class="material-symbols-outlined mr-3">
                    check_circle
                  </span>
                  {sucess}
                </p>
              )}
              {errMsg && (
                <p className="mx-5 mt-4 p-3 text-sm bg-red-300 flex border border-red-800 rounded text-red-800">
                  <span class="material-symbols-outlined mr-1">cancel</span>
                  {errMsg}
                </p>
              )}
              <div class="">
                <label
                  class="block text-left text-md pb-2 text-gray-00"
                  for="username"
                >
                  Username
                </label>
                <input
                  {...register("username", {
                    required: true,
                  })}
                  id="username"
                  onChange={() => {
                    setErrMsg("");
                    setSucess("");
                  }}
                  type="text"
                  placeholder="User Name"
                  aria-label="username"
                  className={
                    errors.username
                      ? "border border-error w-full px-5 py-1 bg-gray-200 rounded"
                      : "w-full px-5 py-1 bg-gray-200 rounded"
                  }
                />
                {errors.username && errors.username.type === "required" && (
                  <span className="text-error text-left text-xs mt-2">
                    Username is required
                  </span>
                )}
              </div>
              <div class="mt-2">
                <label class="block text-left  text-md pb-2 " for="password">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                  })}
                  id="password"
                  onChange={() => {
                    setErrMsg("");
                    setSucess("");
                  }}
                  placeholder="*******"
                  aria-label="password"
                  className={
                    errors.password
                      ? "border border-error w-full px-5 py-1 bg-gray-200 rounded"
                      : "w-full px-5 py-1 bg-gray-200 rounded"
                  }
                />
                {errors.password && errors.password.type === "required" && (
                  <span className="text-error text-left text-xs mt-2">
                    Password is required
                  </span>
                )}
              </div>
              <div class="mt-4 mx-auto">
                <a
                  class="block text-sm text-blue-500 hover:text-blue-800 text-left"
                  href="#"
                >
                  Forgot Password?
                </a>
                <button
                  class="w-full py-1 my-2 text-white font-bold tracking-wider bg-primary  rounded"
                  type="submit"
                >
                  {loading ? "Loading ..." : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <div className='login-container border-t-primary rounded-lg drop-shadow-lg border-t-2 w-80 mt-10 bg-white flex justify-center'>
                <div className='py-2 w-full'>
                    <div className='login-heading text-lg text-grey py-5 px-5 border-b'>
                        Login
                    </div>
                    { }
                    {sucess && (
                        <p className='mx-5 mt-4 text-sm p-3 flex bg-green-200 border border-green-800 rounded text-green-800'>
                            <span class='material-symbols-outlined mr-3'>check_circle</span>
                            {sucess}
                        </p>
                    )}
                    {errMsg && (
                        <p className='mx-5 mt-4 p-3 text-sm bg-red-300 flex border border-red-800 rounded text-red-800'>
                            <span class='material-symbols-outlined mr-1'>cancel</span>
                            {errMsg}
                        </p>
                    )}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='px-5 pb-10'
                        action=''>
                        <div className='row mt-5'>
                            <div className='col flex flex-col'>
                                <label className='text-xs mb-2' htmlFor='username'>
                                    Username
                                </label>
                                <input
                                    type='text'
                                    {...register("username", {
                                        required: true,
                                    })}
                                    id='username'
                                    onChange={() => {
                                        setErrMsg("");
                                        setSucess("");
                                    }}
                                    className={
                                        errors.username
                                            ? "border border-error rounded bg-red-50 p-2"
                                            : "border rounded bg-blue-50 p-2"
                                    }
                                />
                                {errors.username && errors.username.type === "required" && (
                                    <span className='text-error text-xs mt-2'>
                                        Username is required
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col flex flex-col'>
                                <label className='text-xs mb-2' htmlFor='password'>
                                    Password
                                </label>
                                <input
                                    type='password'
                                    {...register("password", {
                                        required: true,
                                    })}
                                    id='password'
                                    onChange={() => {
                                        setErrMsg("");
                                        setSucess("");
                                    }}
                                    className={
                                        errors.password
                                            ? "border border-error rounded bg-red-50 p-2"
                                            : "border rounded bg-blue-50 p-2"
                                    }
                                />
                                {errors.password && errors.password.type === "required" && (
                                    <span className='text-error text-xs mt-2'>
                                        Password is required
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col'>
                                <input
                                    type='checkbox'
                                    className='border rounded bg-blue-50 mt-1'
                                />
                                <label className='text-xs ml-3' htmlFor='email'>
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <div className='row mt-10'>
                            <div className='col flex flex-col'>
                                <button className='border rounded-lg text-xs bg-primary shadow-2xl hover:bg-blue-700 cursor-pointer text-white  p-3'>
                                    {loading ? "Loading ..." : "Login"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div> */}
    </div>
  );
};

export default Login;
