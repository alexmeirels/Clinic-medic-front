import React from "react";

import ListAddress from "../pages/restrict/ListAddress";
import ListAppointment from "../pages/restrict/ListAppointment";
import ListEmployee from "../pages/restrict/ListEmployee";
import ListPatient from "../pages/restrict/ListPatient";
import RegistEmployee from "../pages/restrict/RegistEmployee";
import RegistPatient from "../pages/restrict/RegistPatient";
import HomeRestrict from "../pages/restrict/HomeRestrict";

import Home from "../pages/public/Home";
import Address from "../pages/public/Address";
import Gallery from "../pages/public/Gallery";
import Login from "../pages/public/Login";
import Scredule from "../pages/public/Scredule";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/address",
    element: <Address />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/listAddress",
    element: <ListAddress />,
  },
  {
    path: "/listAppointment",
    element: <ListAppointment />,
  },
  {
    path: "/listEmployee",
    element: <ListEmployee />,
  },
  {
    path: "/listPatient",
    element: <ListPatient />,
  },
  {
    path: "/registEmployee",
    element: <RegistEmployee />,
  },
  {
    path: "/registPatient",
    element: <RegistPatient />,
  },
  {
    path: "/homeRestrict",
    element: <HomeRestrict />,
  },
  {
    path: "/scredule",
    element: <Scredule />,
  },
]);

export default router;
