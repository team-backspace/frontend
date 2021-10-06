import React, { Component } from "react";

class Main extends Component {
    render () {
        return (
            <>
                <div className = "relative">
                    <div className = "relative z-50">
                        Hello, World!
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
