import React, { Component } from "react";

import { Button } from "antd";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";

import CardRow from "../components/CardRow";


class Login extends Component {
    render () {
        return (
            <div className = "flex justify-center items-center flex-col h-100 w-screen">
                <h1 className = "text-3xl font-thin mb-2">로그인</h1>
                <h4 className = "text-xs font-thin mb-6">다음으로 로그인</h4>
                <div className = "">
                    <Button className = "w-10 !h-10 flex justify-center !px-2 !rounded-full">
                        <GoogleOutlined className = "text-2xl" />
                    </Button>
                    <Button className = "w-10 !h-10 flex justify-center !px-2 !rounded-full ml-3">
                        <FacebookOutlined className = "text-2xl" />
                    </Button>
                </div>
            </div>
        )
    }
}

export default Login;