import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Auto from './pages/auto';
import Manual from './pages/manual';
import './styles.css';


function App (){

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/auto'   element ={<Auto />}/>
                <Route path='/manual' element = {<Manual />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;