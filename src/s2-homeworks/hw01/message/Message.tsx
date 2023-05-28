import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType;
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={props.message.message.time + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={props.message.user.avatar + props.message.id}
                    src={props.message.user.avatar}
                    alt="Avatar"
                    //
                />
                <div className={s.text}>
                    <div id={props.message.user.name + props.message.id} className={s.name}>
                        {/*создаёт студент*/}

                        {props.message.user.name}
                    </div>
                    <pre id={props.message.message.text + props.message.id} className={s.messageText}>
                        {props.message.message.text}

                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={props.message.message.time + props.message.id} className={s.time}>
                {props.message.message.time }

                {/**/}
            </div>
        </div>
    )
}

export default Message
