import React, { Component } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./Home"
import ViewTransactions from './ViewTransactions';

class App extends Component {
    render() {
        return <div><BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/address" element={<ViewTransactions />}></Route>
            </Routes>
        </BrowserRouter>
        </div>
    }
}



export default App;