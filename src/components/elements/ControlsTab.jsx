import { ReactComponent as MicIcon } from '../../assets/microphone.svg'
import { ReactComponent as ShareIcon } from '../../assets/Share.svg'
import { ReactComponent as MovieIcon } from '../../assets/movie.svg'
import { ReactComponent as BotIcon } from '../../assets/Bot.svg'
import { ReactComponent as VideoIcon } from '../../assets/video.svg'
import { ReactComponent as PresentIcon } from '../../assets/present.svg'
import { ReactComponent as DotIcon } from '../../assets/dots.svg'
import { ReactComponent as HangUpIcon } from '../../assets/hangup.svg'
import { ReactComponent as PalmIcon } from '../../assets/palm.svg'
import { ReactComponent as CCIcon } from '../../assets/Closed Captions CC.svg'
import { ReactComponent as ChatIcon } from '../../assets/chat.svg'

import { useDispatch } from 'react-redux'
import { chat } from '../../lib/chatPosition'

import styles from '../../styles/elements.module.scss'
export default function ControlsTab() {
    const dispatch = useDispatch()
    return <footer id={styles['controls']} className="flex fixed w-full max-h-24 bottom-0 box-border px-12 py-6 justify-between">
        <div className='flex items-center gap-10'>
            <div className='flex items-center gap-6'>
                <button className='flex border border-white items-center justify-center p-2 w-12 h-12 rounded-full'><ShareIcon /></button>
                <button className='flex border border-white items-center justify-center p-2 w-12 h-12 rounded-full'><MovieIcon /></button>

            </div>
            <button className='flex border border-white items-center justify-center p-2 w-12 h-12 rounded-full'><BotIcon /></button>

        </div>

        <div id={styles['middle']} className='flex items-center gap-6'>
            <button className='flex border border-white items-center justify-center p-2 w-12 h-12 rounded-full'><MicIcon /></button>
            <button className='flex border border-white items-center justify-center p-2 w-12 h-12 rounded-full'><VideoIcon /></button>
            <button className='flex border border-white items-center justify-center p-2 w-12 h-12 rounded-full'><PresentIcon /></button>
            <button className='flex border border-white items-center justify-center p-2 gap-2 h-10 rounded-full'><HangUpIcon /> <hr className='w-px h-full' /> <DotIcon /> </button>

        </div>

        <div className='flex items-center gap-6'>
            <button className='flex border border-white items-center justify-center p-2 w-12 h-12 rounded-full'><PalmIcon /></button>
            <button className='flex border border-white items-center justify-center p-2 w-12 h-12 rounded-full'><CCIcon /></button>
            <button onClick={() => dispatch(chat())}className='flex border border-white items-center justify-center p-2 w-12 h-12 rounded-full'><ChatIcon /></button>

        </div>
    </footer>
}