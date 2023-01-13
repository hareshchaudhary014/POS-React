import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dateFormat from "dateformat";

import { useAuth } from '../Auth/auth'
const TopNav = () => {
  const before_ = useLocation().pathname;
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const location = before_.slice(1).split("/")[0];
let today= dateFormat(new Date(), "mmmm d, dddd");

  const auth = useAuth();
  useEffect(() => {
    if (location === "login") {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [location]);
  return (
    <>
      {showNav && (
        <div className="bg-white flex py-4 px-6">
          <span className="font-bold text-3xl font-secondary text-slate-500 ml-3">
            Elscript Technology
          </span>
          {/* <div className="search-with-icons bg-background ml-3 rounded-lg px-4 py-2">
            <i class="bi bi-search text-grey"></i>
            <input
              className="bg-transparent w-80 ml-2 rounded-lg"
              type="text"
              placeholder="Search..."
            />
          </div> */}
          <div className="ml-auto flex">
            <div className="mr-6 text-md p-2 border rounded-lg my-auto text-slate-500">{today}</div>
            <div className="mr-2 text-lg mb-2 my-auto text-slate-500">
              Welcome, Admin
            </div>
            <button>
              <span
                onClick={() => {
                   auth.logout()
                }}
                class="material-symbols-outlined mx-3 text-red-500"
              >
                power_rounded
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TopNav;
