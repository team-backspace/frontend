import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./layouts/NavBar";

import Main from "./pages/Main";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <BrowserRouter>
                <NavBar />
                <div className="mb-auto flex-grow">
                    <Switch>
                        <Route exact path="/" component={Main} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;
