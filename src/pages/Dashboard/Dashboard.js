import React from "react";
import img from "./image/happy.svg";
const Dashboard = () => {
  return (
    <div className="bg-background min-h-screen p-2">
      <div className="breadcrum-container flex items-center text-xs pl-2 font-thin text-slate-700">
        <div className="first flex items-center">
          <span class="material-symbols-outlined text-sm">home</span>
          <span className="">Home</span>
        </div>
        <div className="divider mx-2">/</div>
        <div className="second">Dashboard</div>
      </div>
      <div className="text-left font-bold text-2xl text-slate-700 ml-3">
        Dashboard
      </div>

      <div class="grid grid-cols-4 gap-6 p-2">
        {/* <!-- card --> */}
        <div class="report-card rounded-lg">
          <div class="card">
            <div class="card-body flex flex-col">
              {/* <!-- top --> */}
              <div class="flex flex-row justify-between items-center">
                <div class="h6 text-indigo-700 fad fa-shopping-cart"></div>
                <span class="rounded-full text-white badge bg-teal-400 text-xs p-1">
                  12%
                  <i class="fal fa-chevron-up ml-1"></i>
                </span>
              </div>
              {/* <!-- end top --> */}

              {/* <!-- bottom --> */}
              <div class="mt-8 text-left">
                <h1 class="text-2xl font-bold num-4">6657</h1>
                <p className="text-grey">items sales</p>
              </div>
              {/* <!-- end bottom --> */}
            </div>
          </div>
          <div class="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div>
        {/* <!-- end card --> */}

        {/* <!-- card --> */}
        <div class="report-card">
          <div class="card">
            <div class="card-body flex flex-col">
              {/* <!-- top --> */}
              <div class="flex flex-row justify-between items-center">
                <div class="h6 text-red-700 fad fa-store"></div>
                <span class="rounded-full text-white badge bg-red-400 text-xs p-1">
                  6%
                  <i class="fal fa-chevron-down ml-1"></i>
                </span>
              </div>
              {/* <!-- end top --> */}

              {/* <!-- bottom --> */}
              <div class="mt-8 text-left">
                <h1 class="text-2xl font-bold num-4">5849</h1>
                <p className="text-grey">new orders</p>
              </div>
              {/* <!-- end bottom --> */}
            </div>
          </div>
          <div class="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div>
        {/* <!-- end card --> */}

        {/* <!-- card --> */}
        <div class="report-card">
          <div class="card">
            <div class="card-body flex flex-col">
              {/* <!-- top --> */}
              <div class="flex flex-row justify-between items-center">
                <div class="h6 text-yellow-600 fad fa-sitemap"></div>
                <span class="rounded-full text-white badge bg-teal-400 text-xs p-1">
                  72%
                  <i class="fal fa-chevron-up ml-1"></i>
                </span>
              </div>
              {/* <!-- end top -->

                <!-- bottom --> */}
              <div class="mt-8 text-left">
                <h1 class="text-2xl font-bold num-4">7914</h1>
                <p className="text-grey">total Products</p>
              </div>
              {/* <!-- end bottom --> */}
            </div>
          </div>
          <div class="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div>
        {/* <!-- end card --> */}

        {/* <!-- card --> */}
        <div class="report-card">
          <div class="card">
            <div class="card-body flex flex-col">
              {/* <!-- top --> */}
              <div class="flex flex-row justify-between items-center">
                <div class="h6 text-green-700 fad fa-users"></div>
                <span class="rounded-full text-white badge bg-teal-400 text-xs p-1">
                  150%
                  <i class="fal fa-chevron-up ml-1"></i>
                </span>
              </div>
              {/* <!-- end top --> */}

              {/* <!-- bottom --> */}
              <div class="mt-8 text-left">
                <h1 class="text-2xl font-bold num-4">2426</h1>
                <p className="text-grey">new Visitor</p>
              </div>
              {/* <!-- end bottom --> */}
            </div>
          </div>
          <div class="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div>
        {/* <!-- end card --> */}
      </div>

      <div class="mt-6 grid grid-cols-2 gap-6 p-2">
        <div class=" bg-slate-400 border-teal-400 shadow-md text-white">
          <div class=" flex flex-row">
            <div class="img-wrapper w-40 h-40 flex justify-center items-center">
              <img src={img} alt="img title" />
            </div>

            <div class="py-2 ml-10 text-left">
              <h1 class="font-bold text-2xl">Good Job, Admin!</h1>
              <p class="text-white text-md">
                You've finished all of your tasks for this week.
              </p>

              <ul class="mt-4">
                <li class="text-md font-white">
                  <i class="fad fa-check-double mr-2 mb-2"></i> Finish Dashboard
                  Design
                </li>
                <li class="text-md font-white">
                  <i class="fad fa-check-double mr-2 mb-2"></i> Fix Issue #74
                </li>
                <li class="text-md font-white">
                  <i class="fad fa-check-double mr-2"></i> Publish version 1.0.6
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="grid grid-cols-2 gap-6 h-full">
            <div class="card">
              <div class="py-3 px-4 flex flex-row justify-between">
                <h1 class="h6">
                  <span class="text-left text-2xl font-bold num-4">304K</span>
                  <p>page view</p>
                </h1>
                <div class="bg-teal-200 text-teal-700 border-teal-300 border w-10 h-10 rounded-full flex justify-center items-center">
                  <i class="fad fa-eye"></i>
                </div>
              </div>
              <div class="analytics_1"></div>
            </div>

            <div class="card">
              <div class="py-3 px-4 flex flex-row justify-between">
                <h1 class="h6">
                  <span class="text-left text-2xl font-bold num-4">304K</span>
                  <p>Unique Users</p>
                </h1>

                <div class="bg-indigo-200 text-indigo-700 border-indigo-300 border w-10 h-10 rounded-full flex justify-center items-center">
                  <i class="fad fa-users-crown"></i>
                </div>
              </div>
              <div class="analytics_1"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-6 mt-6 p-2">
        <div class="card">
          <div class="card-header">Browser Stats</div>

          <div class="p-6 flex flex-row justify-between items-center text-gray-600 border-b">
            <div class="flex items-center">
              <i class="fab fa-chrome mr-4"></i>
              <h1>google chrome</h1>
            </div>
            <div>
              <span class="num-2"></span>%
            </div>
          </div>

          <div class="p-6 flex flex-row justify-between items-center text-gray-600 border-b">
            <div class="flex items-center">
              <i class="fab fa-firefox mr-4"></i>
              <h1>firefox</h1>
            </div>
            <div>
              <span class="num-2"></span>%
            </div>
          </div>

          <div class="p-6 flex flex-row justify-between items-center text-gray-600 border-b">
            <div class="flex items-center">
              <i class="fab fa-internet-explorer mr-4"></i>
              <h1>internet explorer</h1>
            </div>
            <div>
              <span class="num-2"></span>%
            </div>
          </div>

          <div class="p-6 flex flex-row justify-between items-center text-gray-600 border-b-0">
            <div class="flex items-center">
              <i class="fab fa-safari mr-4"></i>
              <h1>safari</h1>
            </div>
            <div>
              <span class="num-2"></span>%
            </div>
          </div>
        </div>

        <div class="card col-span-2 ">
          <div class="card-header">Recent Sales</div>

          <table class="table-auto w-full text-left">
            <thead>
              <tr>
                <th class="px-4 py-2 border-r"></th>
                <th class="px-4 py-2 border-r">product</th>
                <th class="px-4 py-2 border-r">price</th>
                <th class="px-4 py-2">date</th>
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
                <td class="border border-l-0 px-4 py-2">Apple MacBook Pro.</td>
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
                <td class="border border-l-0 px-4 py-2">Samsung Galaxy S9.</td>
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
