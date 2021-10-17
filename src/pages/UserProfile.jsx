import React, { Component } from "react";

import CardRow from "../components/CardRow";


class UserProfile extends Component {
    render () {
        return (
            <>
                <div className = "text-center mt-10 px-20">
                    <h1 className = "text-3xl font-thin">더 다양한 제작자의 작품을 둘러보세요.</h1>
                    <div className = "mt-10">
                        <CardRow cards = {[
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "src/dummydata/images/CardImage.png"
                            }
                        ]} />

                        <CardRow className = "mt-3" cards = {[
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "src/dummydata/images/CardImage.png"
                            }
                        ]} />

                        <CardRow className = "mt-3" cards = {[
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "src/dummydata/images/CardImage.png"
                            }
                        ]} />
                    </div>
                </div>
            </>
        )
    }
}

export default UserProfile;