import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Typography, Menu, Button, Drawer, Divider, Input } from "antd";
import { UnorderedListOutlined, MessageFilled, BellFilled } from "@ant-design/icons";


class NavBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            drawerOpen: false
        };
    }

    render () {
        return (
            <>
                <nav className="px-6 xl:px-6 border-b-1 border-solid border-gray-100 overflow-auto shadow overflow-y-hidden">
                    <div className="w-30 float-left mt-2.5 mb-2 mr-2.5 font-roboto">
                        <Link to="/">
                            <Typography.Title level={4}>Spacebook</Typography.Title>
                        </Link>
                    </div>

                    <div className="hidden xl:flex">
                        <div className="float-left mt-1">
                            <Menu mode="horizontal" className="border-b-0 h-10">
                                <Menu.Item key="discovery">
                                    <Link to="/discovery">탐색</Link>
                                </Menu.Item>
                                <Menu.Item key="live">
                                    <Link to="/live">라이브</Link>
                                </Menu.Item>
                                <Menu.Item key="fund">
                                    <Link to="/fund">펀딩</Link>
                                </Menu.Item>
                                <Menu.Item key="discuss">
                                    <Link to="/discuss">토론</Link>
                                </Menu.Item>
                            </Menu>
                        </div>
                        
                        <div className = "flex-grow px-auto">
                            <Input.Search placeholder="작품을 검색하세요" className = "mt-3 px-30 2xl:px-40" />
                        </div>

                        <div className = "float-right flex">
                            <Button className = "btn mr-10 mt-3">내 작품 공유하기</Button>
                            <BellFilled className = "text-xl mt-4 mr-4 !text-color-lblue hover:(!text-color-dblue cursor-pointer) transition duration-500 ease-in-out" />
                            <MessageFilled className = "text-xl mt-4 mr-4 !text-color-lblue hover:(!text-color-dblue cursor-pointer) transition duration-500 ease-in-out" />
                            <img src = "src/dummydata/images/patrick.png" className = "rounded-md w-8 h-8 mt-3" />
                        </div>
                    </div>

                    <div className="mt-3 float-right xl:hidden">
                        <UnorderedListOutlined className="py-2.5 px-2.5 hover:bg-gray-100 rounded-full transition duration-500 ease-in-out cursor-pointer" onClick={() => this.setState({ drawerOpen: !this.state.drawerOpen })} />
                    </div>
                </nav>
                <Drawer visible={this.state.drawerOpen} onClose={() => this.setState({ drawerOpen: !this.state.drawerOpen })}>
                    <Menu mode="vertical" className="border-0">
                        <Menu.Item key="discovery">
                            <Link to="/discovery">탐색</Link>
                        </Menu.Item>
                        <Menu.Item key="live">
                            <Link to="/live">라이브</Link>
                        </Menu.Item>
                        <Menu.Item key="fund">
                            <Link to="/fund">펀딩</Link>
                        </Menu.Item>
                        <Menu.Item key="discuss">
                            <Link to="/discuss">토론</Link>
                        </Menu.Item>
                        <Divider className="border-gray-300 mb-3" />
                        <Button type="primary" shape="round" className="w-52">로그인</Button>
                    </Menu>
                </Drawer>
            </>
        )
    }
}

export default NavBar;
