import React, { Component } from "react";
import { Card as ACard, Avatar } from "antd";
import { HeartFilled, MessageFilled } from "@ant-design/icons";


class Card extends Component {
    constructor ({ img, avatar, title, desc }) {
        super ({ img, avatar, title, desc });
        this.state = {
            img: img,
            avatar: avatar,
            title: title,
            desc: desc
        }
    }

    render () {
        return (
            <ACard
                hoverable
                className = "w-56 !rounded-2xl overflow-hidden"
                cover = {<img className = "h-40 !rounded-t-2xl" alt="example" src={this.state.img}  />}
                actions = {[
                    <div className = ""> 
                        <HeartFilled className = "text-xl" /> <p className="mt-1">1024</p>
                    </div>,
                    <div className = ""> 
                        <MessageFilled className = "text-xl" /> <p className = "mt-1">512</p>
                    </div>
                ]}
            >
                <ACard.Meta 
                    avatar = {<Avatar src={this.state.avatar} />}
                    title = {this.state.title} description = {this.state.desc} />
            </ACard>
        )
    }
}

export default Card;
