import React from 'react'
import s from './Message.module.css'

// нужно создать правильный тип вместо any
export type MessagePropsType = any

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                {/*создаёт студент*/}
                <img src={'ВСТАВЛЯЙ СЮДА АВАТАРКУ'}
                    id={'hw1-avatar-' + props.message.id}
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                        {'ВСТАВЛЯЙ СЮДА ИМЯ'}
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        {'ВСТАВЛЯЙ СЮДА МЕСЭДЖ'}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}
                {'ВСТАВЛЯЙ СЮДА ВРЕМЯ'}
                {/**/}
            </div>
        </div>
    )
}

export default Message
