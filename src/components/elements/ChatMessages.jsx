import styles from '../../styles/elements.module.scss'

import { ReactComponent as DotIcon } from '../../assets/dots.svg'
import { ReactComponent as RightIcon } from '../../assets/Right.svg'

export default function ChatMessages(props) {
    return <div id={styles[props.type]} className='flex flex-col gap-2 p-2 rounded-lg'>
        <header className='flex w-full justify-between text-white font-semibold'>
            <div className='flex w-full items-center gap-2 text-white text-sm'>
                {props.sender}
                <span className='text-white font-normal text-xs'>{props.time}</span>

            </div>

            <button id={styles['generalbutton']} className="w-5 h-5 flex items-center justify-center">
                <DotIcon />
            </button>

            <button id={styles['privatebutton']} className="flex items-center justify-center border rounded py-1 border-white">
                
                <span className='flex w-max border-r px-2 border-r-white'>TO YOU</span>

                <span className='px-2 text-white flex items-center gap-1'>PRIVATE <RightIcon/></span>
            </button>
        </header>


        <p className='text-white text-sm font-normal block'>
            {props.body}
        </p>
    </div>

}