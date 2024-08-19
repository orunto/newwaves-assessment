import { ReactComponent as SignalIcon } from '../../../assets/signal.svg'
import styles from '../../../styles/elements.module.scss'
export default function Others(props) {
    return <div id={styles['others']} className="p-3 flex w-full h-full items-end bg-contain bg-no-repeat bg-center bg-gray-800" style={{ backgroundImage: 'url(' + props.bg + ')' }}>
        <button className='flex items-center gap-2 p-2 text-sm rounded-lg'>{props.name} <SignalIcon /></button>
    </div>
}