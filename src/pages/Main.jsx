import React, { Component } from "react";
import { Card as ACard } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import Card from "../components/Card";

class Main extends Component {
    render () {
        return (
            <>
                <div className = "relative">
                    <div className = "relative z-50">
                        <div className = "flex flex-col justify-center grid mx-auto xl:grid-cols-2 @sm:px-10 @md:px-20 @lg:px-30 @xl:pl-40">
                            <div>
                                <h1 className = "text-5xl md:text-6xl 2xl:text-8xl mt-20 font-bold mb-5">Spacebook</h1>
                                <h2 className = "text-2xl md:text-3xl 2xl:text-5xl mt-0 mb-2 font-semibold text-purple-500">작품의 가치를 더하세요.</h2>
                                <h3 className = "text-md mt-0 w-68 md:w-80 2xl:w-120 2xl:text-lg font-medium">여러 주제의 작품을 둘러보고 마음에 드는 작품이나 제작자를 찾아보세요.</h3>
                            </div>
                            <div className = "hidden  xl:(grid grid-cols-2) my-10 px-8">
                                <div>
                                    <Card title = "햎반" desc = "맑은 하늘 아래에..." avatar = "src/dummydata/images/patrick.png" img = "src/dummydata/images/CardImage.png" />
                                    <ACard
                                        className = "w-56 !bg-color-lblue !rounded-2xl !mt-6"
                                    >
                                        <h1 className = "text-xl text-white font-bold"># 무민</h1>
                                        <h3 className = "text-md text-white font-semibold">존경개의 작품, 존경개의 좋아요, 존경의 Vue</h3>
                                    </ACard>
                                </div>
                                <div>
                                    <ACard
                                        className = "w-56 !bg-green-500 !rounded-2xl"
                                    >
                                        <h4 className = "text-green-200 font-semibold mb-0">$2048</h4>
                                        <h1 className = "text-xl text-white font-bold mb-0">사진 전시회</h1>
                                        <h3 className = "text-md text-white font-medium">서울에 사진 전시하기</h3>
                                        <div className = "flex items-center bg-white rounded-lg px-2 w-32">
                                            <PlusOutlined className = "!text-green-800 font-black" />
                                            <h3 className = "font-semibold flex-grow text-center pt-1">$15</h3>
                                            <MinusOutlined className = "!text-green-800" />
                                        </div>
                                    </ACard>
                                    <div className = "flex py-4 px-4 flex-col w-56 h-80 rounded-2xl !mt-6" style = {{ backgroundImage: `url("${'src/dummydata/images/Base.png'}")` }}>
                                        <div className = "flex-grow" />
                                        <div className = "">
                                            <h2 className = "text-white text-2xl font-bold mb-0">#Choshinyoung</h2>
                                            <h4 className = "text-white font-medium">시녕녕</h4>
                                        </div>
                                    </div>
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
