import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserContext from "../contexts/userContext";
import CatFormPage from "./CatFormPage";
import CatPage from "./CatPage";
import FormPage from "./FormPage";
import HomePage from "./HomePage";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import UserPage from "./UserPage";



function App(){

    const [info, setInfo] = useState({});
    const contextValue = {info, setInfo};

    return(
        <>
        <UserContext.Provider value={contextValue}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/cats/:catId" element={<CatPage/>}/>
                <Route path="/forms/:catId" element={<FormPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/signin" element={<SignInPage/>}/>
                <Route path="/user/:options" element={<UserPage/>}/>
                <Route path="/user/cats/new" element={<CatFormPage/>}/>
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
        </>
    )
};

export default App;