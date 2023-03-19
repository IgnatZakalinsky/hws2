import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

type FriendMessagePropsType = {
    message: MessageType,
}

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessagePropsType) => {
    const { id, user, message } = props.message;
    return (
        <div
            id={'hw1-friend-message-' + id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + id}
                    // создаёт студент
                    src={user.avatar}
                    alt={user.avatar}
                    //
                />
                <div className={s.angle}></div>
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        {user.name}
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        {message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                {message.time}
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
