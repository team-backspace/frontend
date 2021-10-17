import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";

import Main from "./pages/Main";
import Recommends from "./pages/Recommends";
import Explore from "./pages/Explore";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <BrowserRouter>
                <NavBar />
                <div className="mb-auto flex-grow">
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/recommends" component={Recommends} />
                        <Route path="/explore" component={Explore} />
                    </Switch>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App;
