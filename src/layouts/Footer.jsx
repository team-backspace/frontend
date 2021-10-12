import React from "react";

import { Divider } from "antd";


const Footer = () => (
    <footer className="py-3">
        <Divider className="border-gray-300 mb-3" />
        <p className="font-poppins mx-3">&copy; {new Date().getFullYear()} Team Backspace</p>
    </footer>
)

export default Footer;
