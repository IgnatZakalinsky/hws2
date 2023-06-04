import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import image from './image.png'

export type MessageType = {
    id: number,
    user: {
        avatar: string,
        name: string
    },
    message: {
        text: string,
        time: string
    }
}

export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar,
        name: 'Bradley'
    },
    message: {
        text: 'Hello dude! The "Once Upon a Time in Hollywood" was wonderful. Do you have any other cool roles?',
        time: '22:01'
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: image,
        name: 'Quentin'
    },
    message: {
        text: 'Hey bro! There are a couple of roles for you. I\'ll let you know soon.',
        time: '22:05'
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <hr></hr>
            <div className={s2.hw}>
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>
                <MessageSender M={Message} />
            </div>
            <hr></hr>
        </div>
    )
}

export default HW1
