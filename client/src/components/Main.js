import { useEffect, useState, useRef } from "react";

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import Header from "./Header";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

function Main(props){

const url = "http://localhost:3001/api/"

return(
    <>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<Articles url={url} />} />

                <Route path="/login" element={<Login url={url} />} />
                <Route path="/logout" element={<Logout url={url} />} />
            </Routes>
        </BrowserRouter>
    </>
)
}

export default Main