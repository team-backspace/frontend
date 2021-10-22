import React, { Component } from "react";
import {Redirect} from "react-router-dom";


class Callback extends Component {
    constructor () {
        super();

        this.state = {
            type: (new URLSearchParams(window.location.search)).get("type"),
            token: (new URLSearchParams(window.location.search)).get("token")
        }

        localStorage.token = this.state.token
    }
    render () {
        return (
            <Redirect to = "/" />
        )
    }
}

export default Callback;