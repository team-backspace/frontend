import React, { Component } from "react";

class Main extends Component {
    render () {
        return (
            <>
                <div className = "relative">
                    <div className = "relative z-50">
                        <div className = "grid px-10 md:px-20 lg:px-30 xl:px-40">
                            <h1 className = "text-5xl xl:text-6xl mt-20 font-bold mb-5">Spacebook</h1>
                            <h2 className = "text-2xl xl:text-3xl mt-0 mb-2 font-semibold text-purple-500">작품의 가치를 더하세요.</h2>
                            <h3 className = "text-md mt-0 w-68 xl:w-80 font-medium">여러 주제의 작품을 둘러보고 마음에 드는 작품이나 제작자를 찾아보세요.</h3>
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
