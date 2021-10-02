import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <BrowserRouter>
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
