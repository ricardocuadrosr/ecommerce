import { Dashboard } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

// Function to check if the route is active
const activeRoute = (path) => {
  return window.location.pathname.includes(path);
};

export function SidebarLinks({ routes }) {
  return (
    <ul>
      {routes.map((route, index) => (
        <Link key={index} to={`${route.layout}/${route.path}`}>
          <div className="relative mb-3 flex hover:cursor-pointer">
            <li className="my-[3px] flex cursor-pointer items-center px-8">
              <span
                className={`${
                  activeRoute(route.path)
                    ? "font-bold text-brand-500 dark:text-white"
                    : "font-medium text-gray-600"
                }`}
              >
                {route.icon ? route.icon : <Dashboard />}{" "}
              </span>
              <p
                className={`leading-1 ml-4 flex ${
                  activeRoute(route.path)
                    ? "font-bold text-navy-700 dark:text-white"
                    : "font-medium text-gray-600"
                }`}
              >
                {route.name}
              </p>
            </li>
          </div>
        </Link>
      ))}
    </ul>
  );
}

