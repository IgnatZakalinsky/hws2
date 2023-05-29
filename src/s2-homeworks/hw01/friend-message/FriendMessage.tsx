import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

export type MessagePropsType = {
    message: MessageType;
}
const FriendMessage = (props: MessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}  className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    src={props.message.user.avatar}
                    alt="Avatar2"

                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-'  + props.message.id}
                        className={s.friendName}
                    >
                        {props.message.user.name }

                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {props.message.message.text}

                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-'  + props.message.id}
                className={s.friendTime}
            >
                {props.message.message.time }

                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
