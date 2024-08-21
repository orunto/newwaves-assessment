import { ReactComponent as MicIcon } from '../../../assets/microphone.svg'
import { ReactComponent as DotIcon } from '../../../assets/dots.svg'
import styles from '../../../styles/elements.module.scss'
export default function Others(props) {
    return <div id={styles['you']} className="flex w-full h-full justify-end bg-contain bg-no-repeat bg-center bg-gray-800 p-4" style={{ backgroundImage: 'url(' + props.bg + ')' }}>
        <div className='flex gap-2'>

            <button className='flex items-center justify-center p-2 w-10 h-10 rounded-full'><MicIcon /></button>
            <button className='flex items-center justify-center p-2 w-10 h-10 rounded-full'><DotIcon /></button>
        </div>

    </div>
}