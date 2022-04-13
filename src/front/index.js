import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Oops } from "../content";
import "./Front.css";

export default function Front({ type, table }) {
  switch (type) {
    case "nomatch":

      return (
        <div className="main shadow">
          <Oops />
        </div>
      );

    default:
      return (
        <div className="main shadow">
          <Outlet />
        </div>
      );
  }
}

function Header() {
  return (
    <>
      <nav className="header shadow">
        <div className="nokk">
          <Link to={"/home"}>
            <Selector query={{ title: "HOME", path: "/home" }} />
          </Link>
          <Link to={"/project"}>
            <Selector query={{ title: "PROJECT", path: "/project" }} />
          </Link>
          <Link to={"/api"}>
            <Selector query={{ title: "API", path: "/api" }} />
          </Link>
        </div>
      </nav>
    </>
  );
}

function Selector({ query }) {
  const [state, setState] = useState(0);
  const { pathname } = useLocation();

  return (
    <>
      <div
        className={`selector ${state ? "shake" : ""}`}
        onClick={
          (e) => {
            if (pathname === query.path) {
              setState(true);
              setTimeout(() => { setState(false); }, 1000);
            }
          }
        }>
        <div className={`${new RegExp(`^${query.path}`).test(pathname) ? "ons" : "offs"}`}>
          <p>{query.title}</p>
        </div>
      </div>
    </>
  );
}

export { Header };