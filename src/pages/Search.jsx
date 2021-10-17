import React, { Component } from "react";

import { Typography, Menu, Button, Drawer, Divider, Input } from "antd";

import CardRow from "../components/CardRow";


class Search extends Component {
    constructor () {
        super();

        this.state = {
            query: (new URLSearchParams(window.location.search)).get("query"),
            results: []
        }
    }
    render () {
        return (
            <>
                {
                    this.state.results.length !== 0 ?
                        (

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
                        ) : (
                            <div className = "text-center mt-10 px-20">
                                <h1 className = "text-3xl font-thin">"{this.state.query}" 검색 결과를 찾을수 없어요.</h1>
                                <h4 className = "text-lg font-thin">하지만, 더 많은 작품들이 키키님을 기다리고 있어요!</h4>
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
                                </div>
                                <h2 className = "text-2xl font-thin mt-20">더 많은 작품들을 탐색하고 소통하세요.</h2>
                                <div className = "flex justify-center pt-2">
                                    <Button className = "btn">탐색하기</Button>
                                    <Button className = "btn ml-7">내 작품 공유하기</Button>
                                </div>
                            </div>
                        )
                }
            </>
        )
    }
}

export default Search;