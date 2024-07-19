import React from "react";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
  },
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "nft-marketplace",
    icon: "",
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: "",
    path: "data-tables",
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: "",
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: "",
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "rtl",
    icon: "",
  },
];

export default routes;
