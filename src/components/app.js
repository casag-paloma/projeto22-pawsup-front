import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CatPage from "./CatPage";
import FormPage from "./FormPage";
import HomePage from "./HomePage";


function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/cats/:catId" element={<CatPage/>}/>
                <Route path="/forms/:catId" element={<FormPage/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default App;