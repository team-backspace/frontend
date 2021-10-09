import React, { Component } from "react";
import { Card, Avatar } from "antd";
import { HeartFilled, MessageFilled } from "@ant-design/icons";

class Main extends Component {
    render () {
        return (
            <>
                <div className = "relative">
                    <div className = "relative z-50">
                        <div className = "flex flex-col justify-center grid mx-auto xl:grid-cols-2 px-10 md:px-20 lg:px-30 xl:px-40">
                            <div>
                                <h1 className = "text-5xl md:text-6xl 2xl:text-8xl mt-20 font-bold mb-5">Spacebook</h1>
                                <h2 className = "text-2xl md:text-3xl 2xl:text-5xl mt-0 mb-2 font-semibold text-purple-500">작품의 가치를 더하세요.</h2>
                                <h3 className = "text-md mt-0 w-68 md:w-80 2xl:w-120 2xl:text-lg font-medium">여러 주제의 작품을 둘러보고 마음에 드는 작품이나 제작자를 찾아보세요.</h3>
                            </div>
                            <div className = "flex hidden px-10 xl:(grid grid-cols-2) mt-10">
                                <div>
                                    <Card
                                        hoverable
                                        className = "w-60 !rounded-2xl"
                                        cover = {<img className = "h-40 !rounded-2xl" alt="example" src="src/dummydata/images/hapban.png"  />}
                                        actions = {[
                                            <div className = ""> 
                                                <HeartFilled className = "text-xl" /> <p className="mt-1">1024</p>
                                            </div>,
                                            <div className = ""> 
                                            <MessageFilled className = "text-xl" /> <p className = "mt-1">512</p>
                                            </div>
                                        ]}
                                    >
                                        <Card.Meta 
                                            avatar = {<Avatar src="src/dummydata/images/patrick.png" />}
                                            title = "햎반" description = "맑은 하늘 아래에..." />
                                    </Card>
                                    <Card
                                        className = "w-60 !bg-color-lblue !rounded-2xl !mt-6"
                                    >
                                        <h1 className = "text-xl text-white font-bold"># 무민</h1>
                                        <h3 className = "text-md text-white font-semibold">존경개의 작품, 존경개의 좋아요, 존경의 Vue</h3>
                                    </Card>
                                </div>
                                <div>
                                    
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className = "absolute top-0 bottom-0">
                        <div className = "h-30 md:h-20 lg:h-10 xl:h-0 bg-color-lightbg" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3096.071 886.83" className = "w-screen z-0">
                            <path id="background" d="M1499.543,436.771C970.786,436.771,498.915,760.324,0,796.944V887.33H3096.071V.5C2534.358.5,2059.073,436.771,1499.543,436.771Z" transform="translate(3096.071 887.33) rotate(180)" fill="#eef4ff"/>
                        </svg>
                    </div>
                </div>
            </>
        )
    }
}

export default Main;
