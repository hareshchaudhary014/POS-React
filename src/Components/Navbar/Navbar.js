import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./photo.jpg";

const Navbar = () => {
  const [bigNav, setBigNav] = useState(true);
  const before_ = useLocation().pathname;
  const location = before_.slice(1).split("/")[0];
  const [showNav, setShowNav] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  useEffect(() => {
    if (location === "login") {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [location]);

  const [navList, setNavList] = useState([
    {
      navType: "clickable",
      navLink: "dashboard",
      iconName: "trending_up",
      name: "Dashboard",
    },

    {
      navType: "dropdown",
      navLink: "",
      open: false,
      iconName: "inventory_2",
      name: "Stock",
      navChilds: [
        {
          navType: "clickable",
          navLink: "stock",
          iconName: "view_agenda",
          name: "View Stocks",
        },
        {
          navType: "clickable",
          navLink: "add-stock",
          iconName: "playlist_add",
          name: "Add Stock",
        },
      ],
    },
    {
      navType: "clickable",
      navLink: "orders",
      iconName: "local_shipping",
      name: "Orders",
    },
    {
      navType: "clickable",
      navLink: "sales",
      iconName: "shopping_cart_checkout",
      name: "Sales",
    },
    {
      navType: "clickable",
      navLink: "bills",
      iconName: "point_of_sale",
      name: "Bills",
    },

    {
      navType: "dropdown",
      navLink: "",
      open: false,
      iconName: "edit_attributes",
      name: "Attributes",
      navChilds: [
        {
          navType: "clickable",
          navLink: "categories",
          iconName: "category",
          name: "Categories",
        },
        {
          navType: "clickable",
          navLink: "brands",
          iconName: "atr",
          name: "Brands",
        },
      ],
    },
    {
      navType: "clickable",
      navLink: "settings",
      iconName: "tune",
      name: "Settings",
    },

    // {
    //   navType: "dropdown",
    //   navLink: "",
    //   open: false,
    //   iconName: "receipt_long",
    //   name: "Functionality",
    //   navChilds: [
    //     {
    //       navType: "clickable",
    //       navLink: "courses",
    //       iconName: "menu_book",
    //       name: "Courses",
    //     },
    //     {
    //       navType: "clickable",
    //       navLink: "degrees",
    //       iconName: "school",
    //       name: "Degree",
    //     },
    //     {
    //       navType: "clickable",
    //       navLink: "university",
    //       iconName: "location_city",
    //       name: "University",
    //     },
    //     {
    //       navType: "clickable",
    //       navLink: "countries",
    //       iconName: "flag",
    //       name: "Countries",
    //     },
    //     {
    //       navType: "clickable",
    //       navLink: "testimonials",
    //       iconName: "record_voice_over",
    //       name: "Testimonials",
    //     },
    //     {
    //       navType: "clickable",
    //       navLink: "faqs",
    //       iconName: "quiz",
    //       name: "FAQs",
    //     },
    //   ],
    // },
    // {
    //   navType: "dropdown",
    //   navLink: "",
    //   iconName: "badge",
    //   open: false,
    //   name: "Users Management",
    //   navChilds: [
    //     {
    //       navType: "clickable",
    //       navLink: "users",
    //       iconName: "person_add",
    //       name: "Manage Users",
    //     },
    //     {
    //       navType: "clickable",
    //       navLink: "roles",
    //       iconName: "manage_accounts",
    //       name: "Manage Roles",
    //     },
    //   ],
    // },
    // {
    //   navType: "clickable",
    //   navLink: "social",
    //   iconName: "share",
    //   name: "Social Medias",
    // },
  ]);
  return (
    <>
      {showNav && (
        <div className="side-nav transition ease-in-out duration-1000">
          <div
            className={
              bigNav
                ? "bg-white px-4 w-64 py-6 border-r-2 min-h-screen  border-green-50"
                : "bg-white py-6 border-r-2 min-h-screen   border-green-50"
            }
          >
            <nav>
              <div className="navbar">
                <div className="relative">
                  <div className="nav-logo flex justify-center items-center ">
                    <img
                      className={
                        bigNav
                          ? "logo-text w-32 ml-1 font-bold text-3xl block"
                          : "hidden"
                      }
                      src={logo}
                    />
                  </div>
                  <div
                    onClick={() => {
                      setBigNav(!bigNav);
                    }}
                    className={
                      bigNav
                        ? "nav-toggler absolute -top-1 -right-9 bg-white w-8 h-8 grid items-center rounded-full shadow-lg p-1 cursor-pointer"
                        : "nav-toggler absolute -top-1 -right-4 bg-white w-8 h-8 grid items-center rounded-full shadow-lg p-1 cursor-pointer"
                    }
                  >
                    <span
                      className={
                        bigNav
                          ? "material-symbols-outlined transition ease-in-out duration-500 drop-shadow-lg"
                          : "material-symbols-outlined rotate-180  transition ease-in-out duration-500"
                      }
                    >
                      arrow_back
                    </span>
                  </div>
                </div>

                <div className="navbar-content mt-8 border-t-2 py-2 ">
                  <ul
                    className={
                      bigNav
                        ? "text-sm text-grey font-secondary font-light"
                        : "text-sm text-grey font-secondary font-light px-2"
                    }
                  >
                    {navList.map((nav, index) => (
                      <>
                        {nav.navType === "clickable" ? (
                          <Link
                            to={`/${nav.navLink}`}
                            className={
                              location === `${nav.navLink}`
                                ? "flex  bg-slate-400 justify-start my-2 py-3 text-white rounded-lg items-center"
                                : "flex my-2 py-3 rounded-lg items-center"
                            }
                          >
                            <div className={bigNav ? "flex pr-8" : "flex pr-3"}>
                              <span class="material-symbols-outlined ml-5 mr-2">
                                {nav.iconName}
                              </span>
                              <span className={bigNav ? "block" : "hidden"}>
                                {nav.name}
                              </span>
                            </div>
                          </Link>
                        ) : (
                          <div
                            className={
                              !nav.open
                                ? "flex flex-col my-2 py-3"
                                : "flex flex-col my-0 mt-2 py-0 pt-3"
                            }
                          >
                            <button
                              onClick={() => {
                                let newState = [...navList];
                                newState[index].open = !newState[index].open;
                                setNavList(newState);
                              }}
                              className={
                                !nav.open === false
                                  ? "flex w-full justify-start  rounded-lg items-center relative dropdown-navbar dropOpen"
                                  : "flex w-full justify-start  rounded-lg items-center relative dropdown-navbar"
                              }
                            >
                              <div
                                className={bigNav ? "flex pr-8" : "flex pr-3"}
                              >
                                <span class="material-symbols-outlined ml-5 mr-2">
                                  {nav.iconName}
                                </span>
                                <span className={bigNav ? "block" : "hidden"}>
                                  {nav.name}
                                </span>
                              </div>
                            </button>
                            <div
                              className={
                                nav.open === false
                                  ? "hidden"
                                  : "bg-slate-100 rounded-md"
                              }
                            >
                              {nav.navChilds.map((navChild) => (
                                <Link
                                  to={`/${navChild.navLink}`}
                                  className={
                                    location === `${navChild.navLink}`
                                      ? "flex  bg-slate-400 justify-start my-2 py-3  text-white rounded-lg items-center"
                                      : "flex my-2 py-3 rounded-lg items-center"
                                  }
                                >
                                  <div
                                    className={
                                      bigNav ? "flex pr-8" : "flex pr-3"
                                    }
                                  >
                                    <span
                                      className={
                                        bigNav
                                          ? "material-symbols-outlined ml-10 mr-2"
                                          : "material-symbols-outlined ml-5"
                                      }
                                    >
                                      {navChild.iconName}
                                    </span>
                                    <span
                                      className={bigNav ? "block" : "hidden"}
                                    >
                                      {navChild.name}
                                    </span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
