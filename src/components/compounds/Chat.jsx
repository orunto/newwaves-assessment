import styles from '../../styles/compounds.module.scss'

import { ChatMessages, ChatToggle } from '../elements'
import { ReactComponent as AlertIcon } from '../../assets/alert.svg'
import { ReactComponent as CloseIcon } from '../../assets/Close.svg'
import { ReactComponent as EmojiIcon } from '../../assets/Emoji.svg'
import { ReactComponent as SendIcon } from '../../assets/Send.svg'

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nochat } from '../../lib/chatPosition'
import { newmessage } from '../../lib/chatMessages'

export default function Chat() {
    const [alert, setAlert] = useState(true)
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const position = useSelector(state => state.chat.value)
    const messages = useSelector(state => state.messages.value)

    function chatmessage() {
        let datetime = new Date()
        let newtext = {
            body: message,
            type: 'general',
            sender: 'You',
            time: datetime.getTime
        }
        dispatch(newmessage(newtext))
        setMessage("")
    }

    return <div id={styles['chat']} className='flex flex-col justify-between gap-2' style={{ right: position }}>
        <button className='flex items-center bg-transparent absolute top-4 right-4' onClick={() => dispatch(nochat())}>
            <CloseIcon />

        </button>
        <div className='w-full flex flex-col gap-4'>
            <header className='flex items-center gap-4 text-xl font-semibold text-white'>
                Chat

                <ChatToggle />
            </header>
            {
                alert && (
                    <div className='w-full flex items-center p-4 gap-4 rounded-lg' id={styles['message']}>
                        <AlertIcon />
                        <p className=' text-xs text-white'>Messages can only be seen by people in the call and are deleted when the call ends.</p>
                        <button className='flex items-center bg-transparent' onClick={() => setAlert(false)}>
                            <CloseIcon />

                        </button>
                    </div>

                )
            }
        </div>

        <div className='flex flex-col flex-auto relative gap-8' id={styles["chatbox"]}>
            <div className='w-full gap-4 flex flex-col flex-auto overflow-y-scroll overflow-x-hidden box-border' id={styles['chatcontainer']}>
                {
                    messages.map((chats, i) => (
                        <ChatMessages sender={chats.sender} body={chats.body} time={chats.time} type={chats.type} key={i}/>
                    ))
                }
            </div>

            <fieldset className='w-full flex items-center self-end'>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='w-full p-4 rounded-lg flex h-14 items-center text-sm' placeholder='Send a message to everyone' type="text" name="" id="" />
                <div className='flex items-center gap-4 -ml-20'>
                    <EmojiIcon />

                    <button onClick={chatmessage}>

                        <SendIcon />
                    </button>

                </div>
            </fieldset>
        </div>
    </div>
}